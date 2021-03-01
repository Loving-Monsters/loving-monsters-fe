
import React, { useState, useEffect, useRef } from 'react';
// import styles from './engine.module.scss';
import useEvent from '../hooks/useEvent';
import Player from '../components/Player';
import io from 'socket.io-client';
// import Wall from '../components/Walls';
// import Janitor from '../Janitor/Janitor';
// import { objectArray } from '../../data/walls';
import handleKeyPress from '../utils/handleKeyPress';
import renderWalls from '../utils/renderWalls';
import renderUsers from '../utils/renderUsers';
const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io.connect(serverUrl);



// const bob = {
//     position: { x: 50, y: 50 },
//     dimension: { x: 50, y: 50 },
//     storyBeat: 0,
//     texts: [
//         'Bob: HI Paul!',
//         'Bob: Hi Sjaan!',
//         'Bob: Hi Evan!'
//     ]
// };

// const npcArray = [bob];

export default function Engine() {
    const [userArray, setUserArray] = useState([]);
    const localUser = useRef(null);
    // const [disable, setDisable] = useState(false);
    // const [idleTimer, setIdleTimer] = useState();

    useEffect(() => {
        socket.on('CREATE_USER', ({ newUser, userArray }) => {
            console.log(newUser);
            localUser.current = newUser;
            setUserArray(userArray);
        });

        socket.on('GAME_STATE', response => {
            setUserArray(response);
            setDisable(false);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('CREATE_USER', null);

        setInterval(() => {
            socket.emit('GAME_STATE', localUser.current);
        }, 150);
    }, []);



    setIdleTimer(setTimeout(() => {
        localUser.current = { ...localUser.current, dir: 'idle' };
    }, [400]));



    useEvent('keydown', handleKeyPress(e, localUser));




    return (
        <div //className={styles.container}
        // onClick={() => { engineFocused.current = true; }}
        >
            <span />
            {renderUsers(userArray)}
            {localUser.current ?
                <Player
                    key={localUser.current.id}
                    position={localUser.current.position}
                    direction={localUser.current.dir}
                    userName={' '}
                />
                : null}
            {renderWalls(objectArray)}
        </div>
    );
}

