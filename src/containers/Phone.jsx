import React from 'react';
import styles from './Phone.css';
import Bulletin from '../components/PhoneApps/Bulletin';
import Friendships from '../components/PhoneApps/Friendships';
import Inventory from '../components/PhoneApps/Inventory';
import Messaging from '../components/PhoneApps/Messaging';
import Online from '../components/PhoneApps/Online';

const Phone = () => {
    return (
        <div className={styles.phone}>
            <div className={styles.screen}>
                <Bulletin />
                <Friendships />
                <Inventory />
                <Messaging />
                <Online />
            </div>
        </div>
    );
};

export default Phone;
