import React, { useState } from 'react';
import styles from './Containers.css';
import Bulletin from '../components/PhoneApps/Bulletin';
import Friendships from '../components/PhoneApps/Friendships';
import Inventory from '../components/PhoneApps/Inventory';
import Messaging from '../components/PhoneApps/Messaging';
import Online from '../components/PhoneApps/Online';

const Phone = () => {

    const [displayScreen, setDisplayScreen] = useState('home');

    const handleHome = () => {
        setDisplayScreen('home');
    };

    const handleMessaging = () => {
        setDisplayScreen('messaging');
    };

    const handleBulletin = () => {
        setDisplayScreen('bulletin');
    };

    const handleFriendships = () => {
        setDisplayScreen('friendships');
    };

    const handleInventory = () => {
        setDisplayScreen('inventory');
    };

    const handleOnline = () => {
        setDisplayScreen('online');
    };

    if (displayScreen === 'home') {
        return (
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.apps}>
                        <div 
                            className={styles.icon}
                            onClick={handleMessaging}
                        >
                            <img src="/phone/Messaging.png" />
                            <br /><span>Messaging</span>
                        </div>
    
                        <div 
                            className={styles.icon}
                            onClick={handleBulletin}
                        >
                            <img src="/phone/Bulletin.png" />
                            <br /><span>Bulletin</span>
                        </div>
    
                        <div 
                            className={styles.icon}
                            onClick={handleFriendships}
                        >
                            <img src="/phone/Friendships.png" />
                            <br /><span>Friendships</span>
                        </div>
    
                        <div 
                            className={styles.icon}
                            onClick={handleInventory}
                        >
                            <img src="/phone/Inventory.png" />
                            <br /><span>Inventory</span>
                        </div>
    
                        <div 
                            className={styles.icon}
                            onClick={handleOnline}
                        >
                            <img src="/phone/Online.png" />
                            <br /><span>Online</span>
                        </div>
    
                    </div>
                </div>
            </div>
        );

    } else if (displayScreen === 'messaging') {
        return (
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.apps}>
                        <span onClick={handleHome}>Back to Home Screen</span>
                        <Messaging />
                    </div>
                </div>
            </div>
        );       
    } else if (displayScreen === 'bulletin') {
        return (
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.apps}>
                        <span onClick={handleHome}>Back to Home Screen</span>
                        <Bulletin />
                    </div>
                </div>
            </div>
        );
    } else if (displayScreen === 'friendships') {
        return ( 
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.apps}>
                        <span onClick={handleHome}>Back to Home Screen</span>
                        <Friendships />
                    </div>
                </div>
            </div>
        );
    } else if (displayScreen === 'inventory') {
        return ( 
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.apps}>
                        <span onClick={handleHome}>Back to Home Screen</span>
                        <Inventory />
                    </div>
                </div>
            </div>
        );
    } else if (displayScreen === 'online') {
        return ( 
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.apps}>
                        <span onClick={handleHome}>Back to Home Screen</span>
                        <Online />
                    </div>
                </div>
            </div>
        );
    }
};

export default Phone;
