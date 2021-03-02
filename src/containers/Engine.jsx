
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/userSelector';
import useEvent from '../hooks/useEvent';
import Player from '../components/Player';
import io from 'socket.io-client';

const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io.connect(serverUrl);

export default function Engine() {
    const [userArray, setUserArray] = useState([]);
    const localUser = useRef(null);

    useEffect(() => {
        socket.on('CREATE_USER', ({ newUser, userArray }) => {
            localUser.current = newUser;
            setUserArray(userArray);
        });

        socket.on('GAME_STATE', response => {
            setUserArray(response);
            // setDisable(false);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('CREATE_USER', null);

        setInterval(() => {
            if (localUser.current) {
                socket.emit('GAME_STATE', localUser.current);
            }
        }, 150);
    }, []);


    useEvent('keydown', localUser);




    return (
        <div>
            <span />
            {localUser.current ?
                <Player
                    key={localUser.current.id}
                    position={localUser.current.position}
                    direction={localUser.current.dir}
                    userName={' '}
                />
                : null}
        </div>
    );
}

