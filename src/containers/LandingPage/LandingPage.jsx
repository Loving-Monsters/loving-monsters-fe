import React, { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../utils/socketController';
import styles from './LandingPage.css';
import RadioButton from './RadioButton/RadioButton';
import { handleKeyPress } from './handleKeyPress/handleKeyPress';

const playerSprites = [1, 2, 3];

export default function LandingPage({ handleLogIn }) {
    const [nameInput, setNameInput] = useState('');
    const [takenName, setTakenName] = useState(true);
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
        socket.on('NAME_TAKEN', returnValue => {
            setTakenName(returnValue);
            window.alert('User name is already taken!');
        });
    }, [socket]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            userName: nameInput,
            password: passwordInput,
            avatar: spriteChecked

        };
        socket.on('CREATE_USER', newUser);
    };

    const handleSpriteChange = (spriteNum) => {
        setSpriteChecked(spriteNum);
    };

    const handleNameChange = (event) => {
        const nameEntry = event.target.value;
        setNameInput(nameEntry);
    };

    const createPlayer = () => {

    };



    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmit} className={styles.form}>
                UserName:
                <input
                    className={styles.textInput}
                    type="text"
                    value={nameInput}
                    onChange={({ target }) => setNameInput(target.value)}
                    required
                />
                    Password:
                <input
                    className={styles.textInput}
                    type="password"
                    value={passwordInput}
                    onChange={({ target }) => setPasswordInput(target.value)}
                    required
                />
                <div >
                    Avatar:
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
                <button>SUBMIT</button>
            </form>
        </div>

    );
}
