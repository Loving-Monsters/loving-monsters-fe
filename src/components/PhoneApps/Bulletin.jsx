/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import styles from '../../containers/Containers.css';
import { SocketContext } from '../../utils/socketController';

const Bulletin = ({ currentUser, handleHome }) => {
    const socket = useContext(SocketContext);

    const [input, setInput] = useState('');
    const [localBulletinArray, setLocalBulletinArray] = useState([]);

    const handleInputChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const handleSendBulletin = (event) => {
        event.preventDefault();
        const newBulletin = {
            roomName: currentUser.current.currentRoom,
            text: `${currentUser.current.userName}: ${input}`
        };
        socket.emit('SEND_BULLETIN', newBulletin);
        setInput('');
    };

    const renderBulletin = (bulletin) => {
        const timestamp = new Date(bulletin.timestamp).toLocaleString();

        return (
            <div className={styles.bullItem} key={bulletin.timestamp}>
                <span className={styles.timestamp}>{timestamp}</span>
                <p className={styles.bullText}>{bulletin.text}</p>
            </div>
        );
    };

    useEffect(() => {
        setInterval(() => {
            setLocalBulletinArray(currentUser.current.bulletinArray);
        }, 500);
    }, []);

    return (
        <div className={styles.bulletin}>
            <div className={styles.backbackground}>
                <button className={styles.back} onClick={handleHome}>&#60;
                    <span className={styles.backspan}>Back</span></button>
            </div>
            <div className={styles.bullList}>
                {localBulletinArray ?
                    localBulletinArray.map(bulletin => renderBulletin(bulletin))
                    : null
                }
            </div>
            <div className={styles.formBack}>
                <form onSubmit={(event) => handleSendBulletin(event)}>
                    <input
                        value={input}
                        type="text"
                        onChange={(event) => handleInputChange(event)} />
                    <button className={styles.send}>SEND</button>
                </form>
            </div>
        </div>
    );
};

export default Bulletin;
