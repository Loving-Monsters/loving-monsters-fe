
/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useRef } from 'react';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps.jsx';
import styles from './Containers.css';

import { frog } from '../components/Items/frog';
import { snek } from '../components/Items/snek';
import { ooze } from '../components/Items/ooze';
import { nightlight } from '../components/Items/nightlight';
import { swampscum } from '../components/Items/swampscum';
import { pancakes } from '../components/Items/pancakes';
import { barker } from '../components/NPCs/barker';
import { cal } from '../components/NPCs/cal';
import { misscreech } from '../components/NPCs/misscreech';
import NPC from '../components/NPCs/NPC.jsx';
import DialogueBox from '../components/DialogueBox';
import Item from '../components/Items/Item'
import { hallway } from '../components/maps/hallway';
import { hallway2 } from '../components/maps/hallway2';
import { hallway3 } from '../components/maps/hallway3';
import { classroom } from '../components/maps/classroom';
import { classroom2 } from '../components/maps/classroom2';
import { classroom3 } from '../components/maps/classroom3';
import { courtyard } from '../components/maps/courtyard';

import Arrow from '../components/arrows/Arrow';

const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

const mapObj = {
    hallway,
    classroom,
    classroom2,
    hallway2,
    hallway3,
    classroom3,
    courtyard
};

const npcArr = {
    barker,
    misscreech,
    cal
};
const itemObj = {
    frog,
    snek,
    ooze,
    nightlight,
    swampscum,
    pancakes
};
export default function Engine({ currentUser, socket }) {
    const [userArray, setUserArray] = useState([]);
    const currentMap = useRef(hallway);
    const [loading, setLoading] = useState(false);
    const [disableKeys, setDisableKeys] = useState(false);
    const [boxOpen, setBoxOpen] = useState(false);
    const [currentNpc, setNpc] = useState(false);
    // const idle = useRef(currentUser.current.idle)
    // const [npcArray] = useState([npcArr]);
    console.log(currentUser.current)
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
        console.log(npcArr[npcName]);
        setBoxOpen(true);
        setNpc(npcArr[npcName]);

    };
    const handleItemInteraction = (itemName) => {

        console.log(itemObj[itemName]);
        currentUser.current.inventory.push(itemObj[itemName]);
        itemObj[itemName].display = 'none';
        itemObj[itemName].dimension.x = '0px';
        itemObj[itemName].dimension.y = '0px';
    };

    // const npcArray = npcArr.filter(npc => npc.name === currentMap.current.npc);

    const renderNPCs = () => {
        return currentMap.current.npcs.map(npc =>
            <NPC
                key={npc.name}
                name={npc.displayName}
                img={npc.img}
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
            // rotate={item.rotate}
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

    const handleClose = () => setBoxOpen(false);

    return (

        <div className={styles.view} >


            {loading ? <div>loading...</div>
                : currentUser.current.position ?
                    <div>


                        <div className={styles.map}
                            style={{
                                transform:
                                    `translate(-${currentUser.current.position.x - currentMap.current.transformPositionX}px,
                                    -${currentUser.current.position.y - currentMap.current.transformPositionY}px)`
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
                        </div>

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
                    : null

            }
            {boxOpen ?
                <DialogueBox
                    currentNpc={currentNpc}
                    handleClose={handleClose} />

                : null}

        </div >
    );
}

