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
                <div className={styles.apps}>
                    <div className={styles.icon}>
                        <img src="/phone/Messaging.png" />
                        <span>Messaging</span>
                    </div>
                    <div className={styles.icon}>
                        <img src="/phone/Bulletin.png" />
                        <span>Bulletin</span>
                    </div>
                    <div className={styles.icon}>
                        <img src="/phone/Friendships.png" />
                        <span>Friendships</span>
                    </div>
                    <div className={styles.icon}>
                        <img src="/phone/Inventory.png" />
                        <span>Inventory</span>
                    </div>
                    <div className={styles.icon}>
                        <img src="/phone/Online.png" />
                        <span>Online</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;
