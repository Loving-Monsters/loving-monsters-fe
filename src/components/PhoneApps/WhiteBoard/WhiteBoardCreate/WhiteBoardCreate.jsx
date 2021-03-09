/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../../../../containers/Containers.css';

const WhiteBoardCreate = ({ socket, currentUser }) => {
    const [input, setInput] = useState('');

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
                    onChange={({ target }) => setInput(target.value)}
                    value={input}
                />
                <button>CREATE</button>
            </form>
        </div>
    );
};

export default WhiteBoardCreate;
