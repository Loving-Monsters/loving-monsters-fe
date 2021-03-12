/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useContext } from 'react';
import styles from './Containers.css';
import Home from '../components/PhoneApps/Home/Home';
import Bulletin from '../components/PhoneApps/Bulletin/Bulletin';
import Friendships from '../components/PhoneApps/Friendship/Friendships';
import Inventory from '../components/PhoneApps/Inventory/Inventory';
import Messaging from '../components/PhoneApps/Messaging/Messaging';
import Online from '../components/PhoneApps/Online/Online';
import WhiteBoard from '../components/PhoneApps/WhiteBoard/WhiteBoard';
import { SocketContext } from '../utils/socketController';

const Phone = ({ currentUser }) => {
    const socket = useContext(SocketContext);

    const handleAppChange = (appName) => {
        setDisplayScreen(phoneApps[appName]);
    };

    const [displayScreen, setDisplayScreen] = useState(<Home handleAppChange={handleAppChange} socket={socket} currentUser={currentUser} />);

    useEffect(() => {
        socket.on('RECIEVE_BULLETIN', bulletinObj => {
            if (!currentUser.current.bulletinArray.includes(bulletin => bulletin.timestamp === bulletinObj.timestamp)) {
                currentUser.current.bulletinArray = [...currentUser.current.bulletinArray, bulletinObj];
            }
        });

        socket.on('RECIEVE_MESSAGE', messageObj => {
            currentUser.current.messageObj = messageObj;
            currentUser.current.keyArray = Object.keys(messageObj);
        });

        socket.on('OPEN_WHITEBOARD', taskObj => {
            currentUser.current.taskObj = taskObj;
            handleAppChange('whiteBoard');
        });

        socket.on('GET_TASKS', taskObj => {
            currentUser.current.taskObj = taskObj;
        });
    }, [socket]);

    const handleHome = () => {
        setDisplayScreen(phoneApps.home);
    };

    const phoneApps = {
        home: <Home
            handleAppChange={handleAppChange}
            currentUser={currentUser}
        />,
        bulletin: <Bulletin
            handleHome={handleHome}
            currentUser={currentUser}
        />,
        friendships: <Friendships
            handleHome={handleHome}
        />,
        inventory: <Inventory
            handleHome={handleHome}
            currentUser={currentUser}
        />,
        messaging: <Messaging
            handleHome={handleHome}
            currentUser={currentUser}
        />,
        online: <Online
            handleHome={handleHome}
        />,
        whiteBoard: <WhiteBoard
            handleHome={handleHome}
            currentUser={currentUser}
        />
    };

    return (
        <div className={styles.phone}>
            {displayScreen}
        </div>
    );
};

export default Phone;
