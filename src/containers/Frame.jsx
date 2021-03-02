import React, { useState, useRef, useEffect } from 'react';
import Engine from './Engine';
import io from 'socket.io-client';


const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io.connect(serverUrl);

export default function Frame() {

    const currentUser = useRef({});


    return (
        <div>
            <Engine
                currentUser={currentUser}
                socket={socket}
            />
        </div>
    );
}
