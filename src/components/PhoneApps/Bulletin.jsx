import React, { useState, useEffect } from 'react';
import styles from '../../containers/Containers.css';

const Bulletin = ({ currentUser, handleHome, socket }) => {
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
            <div key={bulletin.timestamp}>
                <p>{bulletin.text}</p>
                <p>{timestamp}</p>
            </div>
        );
    };

    useEffect(() => {
        setInterval(() => {
            setLocalBulletinArray(currentUser.current.bulletinArray);
        }, 500);
    }, []);

    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>

            <form onSubmit={(event) => handleSendBulletin(event)}>
                <input
                    value={input}
                    type="text"
                    onChange={(event) => handleInputChange(event)} />
                <button>SEND</button>
            </form>
            {localBulletinArray ?
                localBulletinArray.map(bulletin => renderBulletin(bulletin))
                : null
            }
        </div>
    );
};

export default Bulletin;
