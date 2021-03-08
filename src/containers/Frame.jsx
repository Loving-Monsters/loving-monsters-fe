import React, { useRef, useState } from 'react';
import Engine from './Engine';
import Phone from './Phone';
import io from 'socket.io-client';
import styles from './Containers.css';


const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io.connect(serverUrl);

export default function Frame() {
    const currentUser = useRef({});

    const handleWhiteBoardInteraction = (name) => {
        console.log('🚀 ~ file: Frame.jsx ~ line 15 ~ handleWhiteBoardInteraction ~ name', name);
    };


    return (
        <div className={styles.container}>
            <Engine
                currentUser={currentUser}
                socket={socket}
                handleWhiteBoardInteraction={handleWhiteBoardInteraction}
            />
            <Phone
                currentUser={currentUser}
                socket={socket}

            />
        </div>
    );
}
