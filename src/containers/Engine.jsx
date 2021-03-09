/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useRef, useContext } from 'react';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps.jsx';
import Arrow from '../components/arrows/Arrow';
import NPC from '../components/NPCs/NPC.jsx';
import Ball from '../components/Ball';
import Item from '../components/Items/Item';
import DialogueBox from '../components/DialogueBox';
import styles from './Containers.css';
import mapObj from '../components/maps/fullMaps';
import itemObj from '../components/Items/fullItems';
import npcObj from '../components/NPCs/fullNPCs';
import { SocketContext } from '../utils/socketController';

const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export default function Engine({ currentUser }) {
    const socket = useContext(SocketContext);

    const [userArray, setUserArray] = useState([]);
    const currentMap = useRef(mapObj.hallway);
    const [loading, setLoading] = useState(false);
    const [disableKeys, setDisableKeys] = useState(false);
    const [boxOpen, setBoxOpen] = useState(false);
    const [currentNpc, setNpc] = useState(false);
    const [thanks, setThanks] = useState('');
    const storyIndex = useRef(0);
    // const [transform, setTransform] = useState(currentMap.current.balls.position)

    useEffect(() => {
        socket.on('GAME_STATE', response => {
            // console.log('🚀 ~ file: Engine.jsx ~ line 35 ~ useEffect ~ response ', response);

            setUserArray(response);
            setDisableKeys(false);
        });
    }, [socket]);

    useEffect(() => {

        const gameStateInterval = setInterval(() => {
            if (currentUser.current) {
                socket.emit('GAME_STATE', currentUser.current);
            }
        }, 150);

        return () => clearInterval(gameStateInterval);
    }, []);

    useEffect(() => {

        window.addEventListener('keydown', (e) => {
            currentUser.current.idle = false;
            setTimeout(() => {
                currentUser.current.idle = true;
            }, 500);

            if (validKeyPress.includes(e.key)) {
                handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, handleBallInteraction);
            }
        });

        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, setLoading, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, handleBallInteraction));
        };
    }, []);

    const handleMapChange = (mapName) => {
        setLoading(true);

        currentUser.current.position = currentMap.current.portals.filter(portal => portal.name === mapName)[0].startingPosition;

        currentMap.current = mapObj[mapName];
        socket.emit('CHANGE_ROOM', { localUser: currentUser.current, newRoom: mapName });
        currentUser.current.currentRoom = mapName;

        setLoading(false);
    };

    const handleWhiteBoardInteraction = (name) => {
        socket.emit('OPEN_WHITEBOARD', name);
    };

    const handleNPCInteraction = (npcName) => {
        setThanks('');
        setBoxOpen(true);
        setNpc(npcObj[npcName]);
        if (storyIndex.current < 2) {
            storyIndex.current += 1;
        } else {
            storyIndex.current = 0;
        }
    };
    const handleBallInteraction = (direction, up, down, left, right) => {

        if (direction === 'ArrowRight') {
            if (right.type === 'portal') {
                currentMap.current.balls.display = false;
                currentMap.current.balls.dimension.x = 0;
                currentMap.current.balls.dimension.y = 0;
                currentMap.current.balls.location.x -= 100;
                currentMap.current.balls.position.x -= 100;
                mapObj[right.name].balls.display = true;
                mapObj[right.name].balls.dimension.x = 50;
                mapObj[right.name].balls.dimension.y = 50;
            } else
                if (right.type === false) {
                    currentMap.current.balls.location.x += 50;
                    currentMap.current.balls.position.x += 50;
                    currentMap.current.balls.rotate += 35;



                } else
                    if (right.type !== false) {
                        currentMap.current.balls.location.x -= 50;
                        currentMap.current.balls.position.x -= 50;
                        currentMap.current.balls.rotate -= 35;


                    }
        }
        if (direction === 'ArrowLeft') {
            if (left.type === 'portal') {
                currentMap.current.balls.display = false;
                currentMap.current.balls.dimension.x = 0;
                currentMap.current.balls.dimension.y = 0;
                currentMap.current.balls.location.x += 100;
                currentMap.current.balls.position.x += 100;
                mapObj[left.name].balls.dimension.x = 50;
                mapObj[left.name].balls.dimension.y = 50;
                mapObj[left.name].balls.display = true;
            } else
                if (left.type === false) {
                    currentMap.current.balls.location.x -= 50;
                    currentMap.current.balls.position.x -= 50;
                    currentMap.current.balls.rotate -= 35;


                } else
                    if (left.type !== false) {
                        currentMap.current.balls.location.x += 50;
                        currentMap.current.balls.position.x += 50;
                        currentMap.current.balls.rotate += 35;


                    }
        }
        if (direction === 'ArrowUp') {
            if (up.type === 'portal') {
                currentMap.current.balls.display = false;
                currentMap.current.balls.dimension.x = 0;
                currentMap.current.balls.dimension.y = 0;
                currentMap.current.balls.location.y += 50;
                currentMap.current.balls.position.y += 50;
                mapObj[up.name].balls.display = true;
                mapObj[up.name].balls.dimension.x = 50;
                mapObj[up.name].balls.dimension.y = 50;
            } else
                if (up.type === false) {
                    currentMap.current.balls.location.y -= 50;
                    currentMap.current.balls.position.y -= 50;
                    currentMap.current.balls.rotate += 35;


                } else
                    if (up.type !== false) {
                        currentMap.current.balls.location.y += 50;
                        currentMap.current.balls.position.y += 50;
                        currentMap.current.balls.rotate += 35;


                    }
        }
        if (direction === 'ArrowDown') {
            if (down.type === 'portal') {
                currentMap.current.balls.display = false;
                currentMap.current.balls.dimension.x = 0;
                currentMap.current.balls.dimension.y = 0;
                currentMap.current.balls.location.y -= 50;
                currentMap.current.balls.position.y -= 50;
                mapObj[down.name].balls.display = true;
                mapObj[down.name].balls.dimension.x = 50;
                mapObj[down.name].balls.dimension.y = 50;
            } else
                if (down.type === false) {
                    currentMap.current.balls.location.y += 50;
                    currentMap.current.balls.position.y += 50;
                    currentMap.current.balls.rotate += 35;


                } else
                    if (down.type !== false) {
                        currentMap.current.balls.location.y -= 50;
                        currentMap.current.balls.position.y -= 50;
                        currentMap.current.balls.rotate += 35;


                    }
        }

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
    const renderBalls = () => {
        if (currentMap.current.balls.display === true) {
            return < Ball
                key={currentMap.current.balls.position}
                position={currentMap.current.balls.location}
                rotate={currentMap.current.balls.rotate}
            />;


        }

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
            xOffset={currentMap.current.playerOffsetX}
            yOffset={currentMap.current.playerOffsetY}
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
                npc.friendship += item.friendship[npc.name];
            }
            if (item.friendship[npc.name] > 0) {
                setThanks(`${npc.positiveReaction} ${item.name} ${npc.positiveReaction2} ${item.name}`);
            } else if (item.friendship[npc.name] < 0) {
                setThanks(`${npc.negativeReaction} ${item.name} ${npc.negativeReaction2} `);
            } else {
                setThanks(`${npc.neutralReaction} ${item.name} ${npc.neutralReaction2} `);
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
                            {renderUsers()}
                            {renderBalls()}
                            {currentMap.current ?
                                <Maps currentMap={currentMap.current}
                                />
                                :
                                null
                            }

                            <Player
                                idle={currentUser.current.idle}
                                key={currentUser.current.id}
                                position={currentUser.current.position}
                                xOffset={currentMap.current.playerOffsetX}
                                yOffset={currentMap.current.playerOffsetY}
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
                    thanks={thanks}
                    storyIndex={storyIndex}
                    currentUser={currentUser}
                    currentNpc={currentNpc}
                    handleClose={handleClose}
                    handleGiveItem={handleGiveItem} />
                : null}
        </div >
    );
}

