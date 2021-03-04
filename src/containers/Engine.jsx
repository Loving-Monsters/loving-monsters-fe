


/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useRef } from 'react';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps.jsx';
import styles from './Containers.css';
import { hallway } from '../components/hallway';
import { classroom } from '../components/classroom';

const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];

const mapObj = {
    hallway,
    classroom
};

export default function Engine({ currentUser, socket }) {
    const [userArray, setUserArray] = useState([]);
    const currentMap = useRef(hallway);
    const [loading, setLoading] = useState(false);
    const [disableKeys, setDisableKeys] = useState(false);
    const [npcArray, setNpcArray] = useState([]);

    console.log(currentUser)
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
            if (currentUser.current.position.x === currentMap.portals.position.x && currentUser.current.position.y === currentMap.portals.position.y) {
                setLoading(true);
                setCurrentMap(currentMap.portals.nextMap);
            }
        }, 150);


    }, []);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (validKeyPress.includes(e.key)) {
                handleKeyPress(e, currentUser, currentMap, npcArray, setDisableKeys, disableKeys, handleMapChange);
            }
        });
        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, currentMap, npcArray, setDisableKeys, disableKeys, setLoading));
        };
    }, []);

    const handleMapChange = (nextMap) => {

        setLoading(true);
        currentUser.current.position = currentMap.current.portals[0].startingPosition;

        currentMap.current = mapObj[nextMap];
        socket.emit('CHANGE_ROOM', { localUser: currentUser.current, newRoom: nextMap });

        setLoading(false);
    };

    const filteredUserArray = userArray.filter(user => user.currentRoom !== currentUser.current.currentRoom)
    console.log('userarray', userArray)
    console.log(currentUser.current)
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

        <div className={styles.view} onClick={() => { gameFocused.current = true; }}>

            <span />
            {loading ? <div>loading...</div>

                : currentUser.current.position ?
                    <div>
                        <div className={styles.map}
                            style={{
                                transform: `translate(-${currentUser.current.position.x}px, -${currentUser.current.position.y - 400}px)`
                            }}>
                            {currentMap.current ?
                                <Maps currentMap={currentMap.current} />
                                :
                                null
                            }
                            {renderUsers()}
                            <Player
                                key={currentUser.current.id}
                                position={currentUser.current.position}
                                direction={currentUser.current.dir}
                                avatar={currentUser.current.avatar}
                                userName={currentUser.current.userName}
                            />
                        </div>


                    </div>
                    : null
            }
        </div >
    );
}

