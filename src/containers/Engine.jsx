/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
// import useEvent from '../hooks/useEvent';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps.jsx';
import styles from './Containers.css';
import { hallway } from '../components/hallway';
import { classroom } from '../components/classroom';

const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];

export default function Engine({ currentUser, socket }) {
    const [userArray, setUserArray] = useState([]);
    const [currentMap, setCurrentMap] = useState(hallway);
    const [loading, setLoading] = useState(false);
    // const [mapImage, setMapImage] = useState(hallImage)
    const [disableKeys, setDisableKeys] = useState(false);
    const [npcArray, setNpcArray] = useState([]);

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

    // useEffect(() => {
    //     // if (currentUser.current.position.x === currentMap.portals.position.x) {
    //     setCurrentMap(classroom);

    // }, [currentUser.current.position]);

    useEffect(() => {
        socket.emit('CREATE_USER', null);

        setInterval(() => {
            if (currentUser.current) {
                socket.emit('GAME_STATE', currentUser.current);
            }
        }, 150);
    }, []);
    // console.log(currentMap.portals.position)
    // console.log(currentUser.current.position)
    // function mapTransition(currentMap, currentUser) {
    //     if (currentUser.current.position === currentMap.portals.position) {
    //         setCurrentMap(classroom);
    //     }
    // }
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (validKeyPress.includes(e.key)) {
                handleKeyPress(e, currentUser, currentMap, npcArray, setDisableKeys, disableKeys, setCurrentMap, setLoading);
            }
        });
        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, currentMap, npcArray, setDisableKeys, disableKeys, setCurrentMap, setLoading));
        };
    }, []);

    const renderUsers = () => {
        return userArray.map(user => <Player
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

            <span />
            {loading ? <div>loading...</div>

                : currentUser.current.position ?
                    <div>
                        <div className={styles.map}
                            style={{
                                transform: `translate(-${currentUser.current.position.x}px, -${currentUser.current.position.y - 400}px)`
                            }}>
                            <Maps currentMap={currentMap} />
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

