/* eslint-disable react/prop-types */

import React, { useState, useContext } from 'react';
import { SocketContext } from '../../../../utils/socketController';
import styles from '../../../../containers/Containers.css';

const WhiteBoardCreate = ({ currentUser }) => {
    const [input, setInput] = useState('');
    const socket = useContext(SocketContext);


    const handleSubmit = (event) => {
        event.preventDefault();

        if (input !== '') {
            const newTask = {
                authorName: currentUser.current.userName,
                text: input,
                roomName: currentUser.current.currentRoom,
            };
            socket.emit('CREATE_TASK', newTask);
            setInput('');
        }
    };

    return (
        <div className={styles.createTask}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    maxLength="144"
                    onChange={({ target }) => setInput(target.value)}
                    value={input}
                />
                <button>CREATE</button>
            </form>
        </div>
    );
};

export default WhiteBoardCreate;
