/* eslint-disable max-len */
/* eslint-disable react/prop-types */

import React, { useEffect, useState, useContext } from 'react';
import styles from './home.css';
import { SocketContext } from '../../../utils/socketController';

const Home = ({ handleAppChange, currentUser }) => {
    const [inClassroom, setInClassroom] = useState(false);
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('CHANGE_ROOM', newRoom => {
            handleAppChange('home');
            newRoom.includes('classroom') ? setInClassroom(true) : setInClassroom(false);
        });
    }, [socket]);

    useEffect(() => {
        const currentRoom = currentUser.current.currentRoom;
        if (currentRoom) {
            currentRoom.includes('classroom') ? setInClassroom(true) : setInClassroom(false);
        }
    }, []);

    return (
        <div className={styles.homescreen}>
            <div className={styles.apps}>
                <div
                    className={styles.icon}
                    onClick={() => handleAppChange('messaging')}
                >
                    <img src="/phone/Messaging.png" />
                    <br /><span>Messaging</span>
                </div>

                <div
                    className={styles.icon}
                    onClick={() => handleAppChange('bulletin')}
                >
                    <img src="/phone/Bulletin.png" />
                    <br /><span>Bulletin</span>
                </div>

                <div
                    className={styles.icon}
                    onClick={() => handleAppChange('friendships')}
                >
                    <img src="/phone/Friendships.png" />
                    <br /><span>Friendships</span>
                </div>

                <div
                    className={styles.icon}
                    onClick={() => handleAppChange('inventory')}
                >
                    <img src="/phone/Inventory.png" />
                    <br /><span>Inventory</span>
                </div>

                <div
                    className={styles.icon}
                    onClick={() => handleAppChange('online')}
                >
                    <img src="/phone/Online.png" />
                    <br /><span>Online</span>
                </div>
                
                {inClassroom ?
                    <div
                        className={styles.icon}
                        onClick={() => handleAppChange('whiteBoard')}
                    >
                        <img src="/phone/Tasks.png" />
                        <br /><span>White Board</span>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Home;
