
/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useRef } from 'react';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps.jsx';
import styles from './Containers.css';


import { barker } from '../components/NPCs/barker';
import { cal } from '../components/NPCs/cal';
import { misscreech } from '../components/NPCs/misscreech';
import NPC from '../components/NPCs/NPC.jsx';

import { hallway } from '../components/maps/hallway';
import { hallway2 } from '../components/maps/hallway2';
import { hallway3 } from '../components/maps/hallway3';
import { classroom } from '../components/maps/classroom';
import { classroom2 } from '../components/maps/classroom2';
import { classroom3 } from '../components/maps/classroom3';
import { courtyard } from '../components/maps/courtyard';

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

const npcArr = [
    barker,
    misscreech,
    cal
];

export default function Engine({ currentUser, socket }) {
    const [userArray, setUserArray] = useState([]);
    const currentMap = useRef(hallway);
    const [loading, setLoading] = useState(false);
    const [disableKeys, setDisableKeys] = useState(false);
    // const [npcArray] = useState([npcArr]);

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
            if (validKeyPress.includes(e.key)) {
                handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange);
            }
        });
        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, currentMap, setDisableKeys, disableKeys, setLoading, handleMapChange));
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

    const filteredNPCArray = npcArr.filter(npc => npc.name === currentMap.current.npc);

    const renderNPCs = () => {
        return filteredNPCArray.map(npc =>
            <NPC 
                key={npc.name}
                name={npc.name}
                img={npc.img}
                npcposition={npc.npcposition}
                marginTop={npc.marginTop}
                marginLeft={npc.marginLeft}
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
        />
        );
    };

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
                            {renderNPCs()}
                            {currentMap.current ?
                                <Maps currentMap={currentMap.current} />
                                :
                                null
                            }
                            {renderUsers()}
                        </div>

                        <Player
                            key={currentUser.current.id}
                            position={currentUser.current.position}
                            direction={currentUser.current.dir}
                            avatar={currentUser.current.avatar}
                            userName={currentUser.current.userName}
                        />

                    </div>
                    : null
            }
        </div >
    );
}

