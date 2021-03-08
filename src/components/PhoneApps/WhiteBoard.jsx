import React, { useState, useEffect } from 'react';
import WhiteBoardHeader from '../WhiteBoardHeader/WhiteBoardHeader';
import WhiteBoardTodo from '../WhiteBoardTodo/WhiteBoardTodo';
import WhiteBoardInProgress from '../WhiteBoardInProgress/WhiteBoardInProgress';
import WhiteBoardCompleted from '../WhiteBoardCompleted/WhiteBoardCompleted';
import WhiteBoardCreate from '../WhiteBoardCreate/WhiteBoardCreate';
import styles from '../../containers/Containers.css';

const WhiteBoard = ({ handleHome, socket, currentUser }) => {
    const [taskObj, setTaskObj] = useState({});
    const [taskDisplay, setTaskDisplay] = useState(
        <WhiteBoardTodo
            todoTasks={taskObj.todo}
            socket={socket}
        />
    );

    useEffect(() => {
        setTaskObj(currentUser.current.taskObj);

        taskTimer = setInterval(() => {
            socket.emit('GET_TASKS', currentUser.current.currenRoom);
        }, 1000);

        return () => clearInterval(taskTimer);
    }, []);

    useEffect(() => {
        socket.on('GET_TASKS', allTasks => {
            console.log('🚀 ~ file: WhiteBoard.jsx ~ line 19 ~ useEffect ~ allTasks', allTasks);
            setTaskObj(allTasks);
        });
    }, [socket]);

    const handleTabChange = (tabName) => {
        switch (tabName) {
            case 'todo':
                setTaskDisplay(
                    <WhiteBoardTodo
                        todoTasks={taskObj.todo}
                        socket={socket}
                    />
                );
                break;

            case 'inProgress':
                setTaskDisplay(
                    <WhiteBoardInProgress
                        inProgressTasks={taskObj.inProgress}
                        socket={socket}
                    />
                );
                break;

            case 'completed':
                setTaskDisplay(
                    <WhiteBoardCompleted
                        completedTasks={taskObj.completed}
                        socket={socket}
                    />
                );
                break;

            case 'create':
                setTaskDisplay(
                    <WhiteBoardCreate
                        socket={socket}
                        currentUser={currentUser}
                    />
                );
        }
    };

    return (
        <div className={styles.screen}>
            <WhiteBoardHeader
                handleHome={handleHome}
                handleTabChange={handleTabChange}
            />
        </div>
    );
};
