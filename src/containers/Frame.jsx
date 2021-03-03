import React, { useRef } from 'react';
import Engine from './Engine';
import Phone from './Phone';
import io from 'socket.io-client';
import styles from './Containers.css';


// const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io.connect('http://localhost:3000');

export default function Frame() {

    const currentUser = useRef({});
    const gameFocused = useRef(true);


    return (
        <div className={styles.container}>
            <Engine
                currentUser={currentUser}
                socket={socket}
                gameFocused={gameFocused}
            />
            <Phone
                currentUser={currentUser}
                socket={socket}
                gameFocused={gameFocused}
            />
        </div>
    );
}
