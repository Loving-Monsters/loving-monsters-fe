/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../../../../containers/Containers.css';

const MessageInput = ({ handleSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSendMessage(input);
        setInput('');
    };
    return (
        <div className={styles.formBack}>
            <form
                className={styles.messageForm}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={input}
                    onChange={({ target }) => setInput(target.value)}
                />
                <button className={styles.send}>SEND</button>
            </form >
        </div>
    );
};

export default MessageInput;
