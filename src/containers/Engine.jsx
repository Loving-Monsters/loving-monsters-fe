/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
// import useEvent from '../hooks/useEvent';
import Player from '../components/Player';
import handleKeyPress from '../utils/handleKeyPress';
import Maps from '../components/Maps';
import styles from './Engine.css';

import { hallArray } from '../components/hallway';

export default function Engine({ currentUser, socket }) {
    const [userArray, setUserArray] = useState([]);
    // const [objectArray, setObjectArray] = useState([]);
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

    useEffect(() => {
        socket.emit('CREATE_USER', null);

        setInterval(() => {
            if (currentUser.current) {
                socket.emit('GAME_STATE', currentUser.current);
            }
        }, 150);


    }, []);
    useEffect(() => {
        // if (engineFocused.current) {

        window.addEventListener('keydown', (e) => handleKeyPress(e, currentUser, hallArray, npcArray, setDisableKeys, disableKeys));

        return function cleanup() {
            window.removeEventListener('keydown', (e) => handleKeyPress(e, currentUser, hallArray));
            // };
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
        <div className={styles.view}>

            <span />
            {currentUser.current.position ?
                <div>
                    <div className={styles.map}
                        style={{
                            transform: `translate(-${currentUser.current.position.x}px, -${currentUser.current.position.y - 400}px)`
                        }}>
                        <Maps />
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

