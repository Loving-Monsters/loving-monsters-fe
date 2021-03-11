/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../../../utils/socketController';
import styles from '../whiteboard.css';

const WhiteBoardTodo = ({ currentUser }) => {
    const [todoTasks, setTodoTasks] = useState(currentUser.current.taskObj.todo);
    const socket = useContext(SocketContext);

    useEffect(() => {
        const taskTimer = setInterval(() => {
            setTodoTasks(currentUser.current.taskObj.todo);
        }, 1000);

        return () => clearInterval(taskTimer);
    });

    const handleInProgress = (task) => {
        const updatedTask = {
            ...task,
            status: 'inProgress'
        };

        socket.emit('UPDATE_TASK', updatedTask);
    };

    const renderTask = (task) => {
        const displayTimestamp = new Date(Number(task.timestamp)).toLocaleString();

        return (
            <div key={task.id} className={styles.todoItem}>
                <p className={styles.authorName}>
                    {task.authorName}
                </p>
                <p className={styles.todoTimestamp}>
                    {displayTimestamp}
                </p>
                <p className={styles.todoText}>
                    {task.text}
                </p>
                <button onClick={() => handleInProgress(task)}>
                    MARK IN PROGRESS
                </button>
            </div >
        );
    };

    return (
        <div className={styles.todoTask}>
            <h2>TO-DO</h2>
            <div>
                {todoTasks && todoTasks.length > 0 ?
                    todoTasks.map(task => renderTask(task))
                    :
                    <span>
                        NO TASKS TO DO!
                    </span>
                }
            </div>
        </div>
    );
};

export default WhiteBoardTodo;
