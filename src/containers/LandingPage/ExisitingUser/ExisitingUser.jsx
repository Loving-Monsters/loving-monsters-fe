/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../../../utils/socketController';
import styles from './ExisitingUser.css';

export default function ExisitingUser({ currentUser, handleBack, handleLogIn }) {
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
        <div className={styles.exisitingUser}>
            <button onClick={handleBack}>BACK</button>
            <form
                onSubmit={handleSubmit}
                className={styles.form}>
                <div>
                    User Name:
                    <input
                        className={styles.textInput}
                        type="text"
                        value={nameInput}
                        onChange={({ target }) => setNameInput(target.value)}
                        required
                    />
                </div>
                <div>
                    Password:
                    <input
                        className={styles.textInput}
                        type="password"
                        value={passwordInput}
                        onChange={({ target }) => setPasswordInput(target.value)}
                        required
                    />
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}
