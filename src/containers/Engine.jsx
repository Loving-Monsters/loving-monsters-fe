/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useRef, useContext } from 'react';
import Player from '../components/Player/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/maps/Maps.jsx';
import Arrow from '../components/arrows/Arrow';
import NPC from '../components/NPCs/NPC.jsx';
import Ball from '../components/Ball/Ball';
import Item from '../components/Items/Item';
import DialogueBox from '../components/NPCs/DialogueBox';
import styles from './Containers.css';
import mapObj from '../components/maps/fullMaps';
import itemObj from '../components/Items/fullItems';
import npcObj from '../components/NPCs/fullNPCs';
import { SocketContext } from '../utils/socketController';

import WinBox from '../components/frogger/WinBox';
import LoseBox from '../components/frogger/LoseBox';

const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const CURRENT_USER = 'CURRENT_USER';

export default function Engine({ currentUser }) {
    const socket = useContext(SocketContext);
    const [avatar, setAvatar] = useState(currentUser.current.avatar);
    const [userArray, setUserArray] = useState([]);
    const [ballArray, setBallArray] = useState([]);
    const currentMap = useRef(mapObj[currentUser.current.currentRoom]);
    const [loading, setLoading] = useState(true);
    const [disableKeys, setDisableKeys] = useState(false);
    const [boxOpen, setBoxOpen] = useState(false);
    const [currentNpc, setNpc] = useState(false);
    // const [user, setUser] = useState(false)
    const [thanks, setThanks] = useState('');
    const [count, setCount] = useState(0);
    const storyIndex = useRef(0);
    const onPad = useRef(false);
    const frogger = useRef(false);
    const gameStart = useRef(false);
    const winBox = useRef(false);
    const loseBox = useRef(false);

    useEffect(() => {
        socket.on('GAME_STATE', ({ userArray, ballArray }) => {
            setUserArray(userArray);
            setBallArray(ballArray);
            setDisableKeys(false);
        });
    }, [socket]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        const gameStateInterval = setInterval(() => {
            if (currentUser.current) {
                socket.emit('GAME_STATE', currentUser.current);

            }
        }, 100);
        return () => clearInterval(gameStateInterval);
    }, []);

    useEffect(() => {
        if (frogger.current === true) {
            currentUser.current.avatar = 'frog';
        } else { currentUser.current.avatar = avatar; }
    }, [currentUser.current.position]);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            e.stopImmediatePropagation();

            currentUser.current.idle = false;

            setTimeout(() => {
                currentUser.current.idle = true;
            }, 500);

            if (validKeyPress.includes(e.key)) {
                handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, setBoxOpen);
            }
        });

        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, setLoading, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, setBoxOpen));
        };
    }, []);

    useEffect(() => {
        if (frogger.current) {
            const interval = setInterval(() => {

                if (frogger.current) {
                    onPad.current = false;
                    currentMap.current.pads.forEach(pad => {
                        if (pad.speed > 0 && pad.position.x > 1575 + currentMap.current.playerOffsetX) pad.position.x = 100 + currentMap.current.playerOffsetX;

                        if (pad.speed < 0 && pad.position.x < 125 + currentMap.current.playerOffsetX) pad.position.x = 1600 + currentMap.current.playerOffsetX;

                        pad.position.x += pad.speed;
                        setCount(pad.position.x);

                        if (pad.position.y - (currentUser.current.position.y + currentMap.current.playerOffsetY) < 50 &&
                            pad.position.y - (currentUser.current.position.y + currentMap.current.playerOffsetY) > -50
                            && pad.position.x - (currentUser.current.position.x + currentMap.current.playerOffsetX) < 50
                            && pad.position.x - (currentUser.current.position.x + currentMap.current.playerOffsetX) > -50) {

                            if (pad.speed !== 0) currentUser.current.position.x = (pad.position.x - currentMap.current.playerOffsetX);
                            // currentUser.current.position.x = (pad.position.x - currentMap.current.playerOffsetX);
                        }

                        if (pad.position.y - (currentUser.current.position.y + currentMap.current.playerOffsetY) < 75 &&
                            pad.position.y - (currentUser.current.position.y + currentMap.current.playerOffsetY) > -75
                            && pad.position.x - (currentUser.current.position.x + currentMap.current.playerOffsetX) < 75
                            && pad.position.x - (currentUser.current.position.x + currentMap.current.playerOffsetX) > -75) {
                            onPad.current = true;
                            gameStart.current = true;


                            if (pad.win) {
                                winBox.current = true;
                            }
                        }

                    });

                    if (onPad) {
                        setCount(currentMap.current.pads[0].position.y);

                    }

                    if (gameStart.current === true && onPad.current === false) {
                        loseBox.current = true;
                    }
                }
            }, 250);


            return () => clearInterval(interval);
        }
    }, [frogger.current]);

    const handleMapChange = (mapName) => {
        console.log('🚀 ~ file: Engine.jsx ~ line 131 ~ handleMapChange ~ (mapName)', (mapName));
        if (mapName === 'frogger') { frogger.current = true; }
        if (mapName !== 'frogger') { frogger.current = false; }
        console.log(frogger.current);
        setLoading(true);

        currentUser.current.position = currentMap.current.portals.filter(portal => portal.name === mapName)[0].startingPosition;

        currentMap.current = mapObj[mapName];
        console.log('🚀 ~ file: Engine.jsx ~ line 140 ~ handleMapChange ~ currentMap', currentMap.current);
        socket.emit('CHANGE_ROOM', { localUser: currentUser.current, newRoom: mapName });
        currentUser.current.currentRoom = mapName;

        setBallArray([]);
        setUserArray([]);
        localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser.current));

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleWhiteBoardInteraction = (name) => {
        socket.emit('OPEN_WHITEBOARD', name);
    };

    const handleNPCInteraction = (npcName) => {
        setThanks('');
        setNpc(npcObj[npcName]);
        if (storyIndex.current < 2) {
            storyIndex.current += 1;
        } else {
            storyIndex.current = 0;
        }
        setBoxOpen(true);
    };

    const handleItemInteraction = (itemName) => {
        currentUser.current.inventory.push(itemObj[itemName]);
        itemObj[itemName].display = 'none';
        itemObj[itemName].dimension.x = '0px';
        itemObj[itemName].dimension.y = '0px';
    };

    const handleReset = () => {
        currentUser.current.position.x = 700;
        currentUser.current.position.y = 1050;
        loseBox.current = false;
        winBox.current = false;
        onPad.current = false;
        gameStart.current = false;
    };

    const handleEndGame = () => {
        handleMapChange('courtyard');
        frogger.current = false;
        loseBox.current = false;
        winBox.current = false;
        onPad.current = false;
        gameStart.current = false;
        frogger.current = false;
    };

    const renderPads = () => {
        return currentMap.current.pads.map(pad =>
            <div key={pad.name}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    transform: `translate3d(${pad.position.x}px, ${pad.position.y}px, 0)`
                }}>
                <img src={pad.img}
                    style={{
                        transform: `rotate(${pad.rotate}deg) scale(1.5)`
                    }} />
            </div>
        );
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
        if (ballArray && ballArray.length > 0) {
            return ballArray.map(ball => <Ball
                key={ball.id}
                xOffset={currentMap.current.playerOffsetX}
                yOffset={currentMap.current.playerOffsetY}
                position={ball.position}
                avatar={ball.avatar}
                idle={ball.idle}
            />
            );
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
                setThanks(`${npc.positiveReaction}${item.name}${npc.positiveReaction2}`);
            } else if (item.friendship[npc.name] < 0) {
                setThanks(`${npc.negativeReaction}${item.name}${npc.negativeReaction2}`);
            } else {
                setThanks(`${npc.neutralReaction}${item.name}${npc.neutralReaction2} `);
            }
        });
    };

    const handleClose = () => setBoxOpen(false);

    return (
        <div className={styles.view} >
            {loading ? <div className={styles.loading}>Loading...</div>
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

                            {frogger.current
                                ?
                                renderPads()
                                : null}
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
            {loseBox.current && frogger.current && !winBox.current ? <LoseBox
                handleEndGame={handleEndGame}
                handleReset={handleReset}
                setDisableKeys={setDisableKeys}
            /> : null}
            {winBox.current && frogger.current && !loseBox.current ? <WinBox
                handleEndGame={handleEndGame}
                handleReset={handleReset}
            /> : null}
        </div >
    );
}
