/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useRef } from 'react';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps.jsx';
import Arrow from '../components/arrows/Arrow';
import NPC from '../components/NPCs/NPC.jsx';
import Item from '../components/Items/Item';
import DialogueBox from '../components/DialogueBox';
import styles from './Containers.css';
import mapObj from '../components/maps/fullMaps';
import itemObj from '../components/Items/fullItems';
import npcObj from '../components/NPCs/fullNPCs';

const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export default function Engine({ currentUser, socket }) {
    const [userArray, setUserArray] = useState([]);
    const currentMap = useRef(mapObj.hallway);
    const [loading, setLoading] = useState(false);
    const [disableKeys, setDisableKeys] = useState(false);
    const [boxOpen, setBoxOpen] = useState(false);
    const [currentNpc, setNpc] = useState(false);

    useEffect(() => {
        socket.on('CREATE_USER', ({ newUser, userArray }) => {
            setUserArray(userArray);
            currentUser.current = newUser;
        });

        socket.on('GAME_STATE', response => {
            setUserArray(response);
            setDisableKeys(false);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('CREATE_USER', null);

        setInterval(() => {
            if (currentUser.current) {
                socket.emit('GAME_STATE', currentUser.current);
            }
        }, 150);
    }, []);

    useEffect(() => {

        window.addEventListener('keydown', (e) => {
            currentUser.current.idle = false;
            setTimeout(() => {
                currentUser.current.idle = true;
            }, 500);

            if (validKeyPress.includes(e.key)) {
                handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction, handleItemInteraction);
            }
        });

        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, setLoading, handleMapChange, handleNPCInteraction, handleItemInteraction));
        };
    }, []);

    const handleMapChange = (nextMap) => {
        setLoading(true);

        currentUser.current.position = currentMap.current.portals.filter(portal => portal.nextMap === nextMap)[0].startingPosition;

        currentMap.current = mapObj[nextMap];
        socket.emit('CHANGE_ROOM', { localUser: currentUser.current, newRoom: nextMap });
        currentUser.current.currentRoom = nextMap;

        setLoading(false);
    };

    const handleNPCInteraction = (npcName) => {
        setBoxOpen(true);
        setNpc(npcObj[npcName]);
    };

    const handleItemInteraction = (itemName) => {
        currentUser.current.inventory.push(itemObj[itemName]);
        itemObj[itemName].display = 'none';
        itemObj[itemName].dimension.x = '0px';
        itemObj[itemName].dimension.y = '0px';
    };

    const renderNPCs = () => {
        return currentMap.current.npcs.map(npc =>
            <NPC
                key={npc.name}
                name={npc.displayName}
                img={npc.img}
                npc={npc}
                npcposition={npc.position}
                marginTop={npc.marginTop}
                marginLeft={npc.marginLeft}
            />
        );
    };

    const renderArrows = () => {
        return currentMap.current.arrows.map(arrow =>
            <Arrow
                key={arrow.location}
                marginTop={arrow.marginTop}
                marginLeft={arrow.marginLeft}
                rotate={arrow.rotate}
            />
        );
    };

    const renderItems = () => {
        return currentMap.current.items.map(item =>
            <Item
                position={item.position}
                name={item.name}
                key={item.name}
                img={item.img}
                marginTop={item.marginTop}
                marginLeft={item.marginLeft}
                display={item.display}
            />
        );
    };

    const filteredUserArray = userArray.filter(user => user.currentRoom !== currentUser.current.currentRoom);

    const renderUsers = () => {
        return filteredUserArray.map(user => <Player
            key={user.id}
            position={user.position}
            direction={user.dir}
            avatar={user.avatar}
            userName={user.userName}
            idle={user.idle}
        />
        );
    };

    const handleGiveItem = (npc, item) => {
        currentUser.current.inventory.forEach(userItem => {

            if (userItem.name === item.name) {
                const index = currentUser.current.inventory.indexOf(userItem);

                if (index !== -1) {
                    currentUser.current.inventory.splice(index, 1);
                }
                npc.friendship += item.friendship;
            }
        });
    };

    const handleClose = () => setBoxOpen(false);

    return (

        <div className={styles.view} >
            {loading ? <div>loading...</div>
                : currentUser.current.position ?
                    <div>
                        <div className={styles.map}
                            style={{
                                transform:
                                    `translate3d(-${currentUser.current.position.x - currentMap.current.transformPositionX}px,
                                    -${currentUser.current.position.y - currentMap.current.transformPositionY}px, 0)`
                            }}>
                            {renderItems()}
                            {renderNPCs()}
                            {renderArrows()}

                            {currentMap.current ?
                                <Maps currentMap={currentMap.current}
                                />
                                :
                                null
                            }
                            {renderUsers()}
                            <Player
                                idle={currentUser.current.idle}
                                key={currentUser.current.id}
                                position={currentUser.current.position}
                                direction={currentUser.current.dir}
                                avatar={currentUser.current.avatar}
                                userName={currentUser.current.userName}
                                boxOpen={boxOpen}
                                handleClose={handleClose}
                            />
                        </div>
                    </div>
                    : null

            }
            {boxOpen ?
                <DialogueBox
                    currentNpc={currentNpc}
                    handleClose={handleClose}
                    handleGiveItem={handleGiveItem} />
                : null}
        </div >
    );
}

