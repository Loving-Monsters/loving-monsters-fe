/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../../../utils/socketController';
import styles from '../../Containers.css';

export default function ExistingUser({ currentUser, handleLogIn }) {
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const socket = useContext(SocketContext);


    useEffect(() => {
        socket.on('LOG_IN', userInfo => {
            if (userInfo === false) {
                window.alert('invalid user name or password');
            } else {
                currentUser.current = userInfo;
                handleLogIn();
            }
        });
    }, [socket]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginInfo = {
            userName: nameInput,
            password: passwordInput,
        };

        socket.emit('LOG_IN', loginInfo);
    };

    return (
        <div className={styles.existingUser}>
            <form
                onSubmit={handleSubmit}
                className={styles.form}>
                <p>Username</p>
                <input
                    className={styles.textInput}
                    type="text"
                    value={nameInput}
                    onChange={({ target }) => setNameInput(target.value)}
                    required
                />
                <p>Password</p>
                <input
                    className={styles.textInput}
                    type="password"
                    value={passwordInput}
                    onChange={({ target }) => setPasswordInput(target.value)}
                    required
                />
                <button className={styles.submitButton}>SUBMIT</button>
            </form>
        </div>
    );
}