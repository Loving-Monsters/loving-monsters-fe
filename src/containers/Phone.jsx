/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styles from './Containers.css';

import Home from '../components/PhoneApps/Home';
import Bulletin from '../components/PhoneApps/Bulletin';
import Friendships from '../components/PhoneApps/Friendships';
import Inventory from '../components/PhoneApps/Inventory';
import Messaging from '../components/PhoneApps/Messaging';
import Online from '../components/PhoneApps/Online';

const Phone = ({ currentUser, socket }) => {

    const handleAppChange = (appName) => {
        setDisplayScreen(phoneApps[appName]);
    };

    const [displayScreen, setDisplayScreen] = useState(<Home handleAppChange={handleAppChange} />);

    const handleHome = () => {
        setDisplayScreen(phoneApps.home);
    };

    const phoneApps = {
        home: <Home
            handleAppChange={handleAppChange}
        />,
        bulletin: <Bulletin
            handleHome={handleHome}
        />,
        friendships: <Friendships
            handleHome={handleHome}
        />,
        inventory: <Inventory
            handleHome={handleHome}
        />,
        messaging: <Messaging
            handleHome={handleHome}
        />,
        online: <Online
            handleHome={handleHome}
        />
    };

    return (
        <div className={styles.phone}>
            {displayScreen}
        </div>
    );


};

export default Phone;
