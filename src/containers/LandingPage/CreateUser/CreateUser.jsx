/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../../utils/socketController';
import styles from '../../Containers.css';
import RadioButton from '../RadioButton/RadioButton';
import { handleKeyPress } from '../handleKeyPress/handleKeyPress';

const playerSprites = [1, 2, 3];

export default function CreateUser({ handleLogIn, handleExistingUser, currentUser }) {
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [spriteDirection, setSpriteDirection] = useState('down');
    const [spriteChecked, setSpriteChecked] = useState(1);
    const socket = useContext(SocketContext);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            handleKeyPress(e, setSpriteDirection);
        });

        return function cleanup() {
            window.removeEventListener('keydown', (e) => {
                handleKeyPress(e, setSpriteDirection);
            });
        };

    }, []);

    useEffect(() => {
        socket.on('CREATE_USER', (newUser) => {
            if (newUser === false) {
                window.alert(`${nameInput} is already taken!`);
            } else {
                currentUser.current = newUser;
                handleLogIn();
            }
        });

    }, [socket]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            userName: nameInput,
            password: passwordInput,
            avatar: spriteChecked

        };
        socket.emit('CREATE_USER', newUser);
    };

    const handleSpriteChange = (spriteNum) => {
        setSpriteChecked(spriteNum);
    };

    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <p>Username:</p>
                <input
                    className={styles.textInput}
                    type="text"
                    value={nameInput}
                    onChange={({ target }) => setNameInput(target.value)}
                    required
                />
                <p>Password:</p>
                <input
                    className={styles.textInput}
                    type="password"
                    value={passwordInput}
                    onChange={({ target }) => setPasswordInput(target.value)}
                    required
                />
                <div >
                    <p>Avatar:</p>
                    <div className={styles.avatarExample}>
                        {playerSprites.map(spriteNum => {
                            return <RadioButton
                                key={spriteNum}
                                spriteNum={spriteNum}
                                spriteDirection={spriteDirection}
                                spriteChecked={spriteChecked}
                                handleSpriteChange={handleSpriteChange}
                            />;
                        })}
                    </div>
                </div>
                <button className={styles.submitButton}>SUBMIT</button>
            </form>
            <div>
                <button className={styles.redirectButton} onClick={handleExistingUser}>Already have an account?</button>
            </div>
        </div>

    );
}
