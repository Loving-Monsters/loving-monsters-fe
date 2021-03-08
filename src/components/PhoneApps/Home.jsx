/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../containers/Containers.css';

const Home = ({ handleAppChange }) => {
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
            </div>
        </div>
    );
};

export default Home;
