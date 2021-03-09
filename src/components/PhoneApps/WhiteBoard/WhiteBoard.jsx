/* eslint-disable react/prop-types */

import React, { useState, useEffect, useContext } from 'react';
import WhiteBoardHeader from './WhiteBoardHeader/WhiteBoardHeader';
import WhiteBoardTodo from './WhiteBoardTodo/WhiteBoardTodo';
import WhiteBoardInProgress from './WhiteBoardInProgress/WhiteBoardInProgress';
import WhiteBoardCompleted from './WhiteBoardCompleted/WhiteBoardCompleted';
import WhiteBoardCreate from './WhiteBoardCreate/WhiteBoardCreate';
import styles from '../../../containers/Containers.css';
import { SocketContext } from '../../../utils/socketController.js';

const WhiteBoard = ({ handleHome, currentUser }) => {
    const socket = useContext(SocketContext);
    const [taskObj, setTaskObj] = useState({});
    const [taskDisplay, setTaskDisplay] = useState(
        <WhiteBoardTodo
            currentUser={currentUser}
            socket={socket}
        />
    );

    useEffect(() => {
        const taskTimer = setInterval(() => {
            socket.emit('GET_TASKS', currentUser.current.currentRoom);
        }, 1000);

        return () => clearInterval(taskTimer);
    }, []);

    useEffect(() => {
        socket.on('GET_TASKS', allTasks => {
            setTaskObj(allTasks);
        });
    }, [socket]);

    const handleTabChange = (tabName) => {
        switch(tabName) {
            case 'todo':
                setTaskDisplay(
                    <WhiteBoardTodo
                        currentUser={currentUser}
                    />
                );
                break;

            case 'inProgress':
                setTaskDisplay(
                    <WhiteBoardInProgress
                        currentUser={currentUser}
                    />
                );
                break;

            case 'completed':
                setTaskDisplay(
                    <WhiteBoardCompleted
                        currentUser={currentUser}
                    />
                );
                break;

            case 'create':
                setTaskDisplay(
                    <WhiteBoardCreate
                        currentUser={currentUser}
                    />
                );
        }
    };

    return (
        <div className={styles.whiteboard}>
            <WhiteBoardHeader
                handleHome={handleHome}
                handleTabChange={handleTabChange}
            />
            {taskDisplay}
        </div>
    );
};

export default WhiteBoard;
