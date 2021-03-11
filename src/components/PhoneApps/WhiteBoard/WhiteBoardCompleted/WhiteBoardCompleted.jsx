/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import React, { useState, useEffect, useContext } from 'react';
import styles from '../whiteboard.css';
import { SocketContext } from '../../../../utils/socketController';

const WhiteBoardCompleted = ({ currentUser }) => {
    const socket = useContext(SocketContext);

    const [completedTasks, setCompletedTasks] = useState(currentUser.current.taskObj.completed);

    useEffect(() => {
        const taskTimer = setInterval(() => {
            setCompletedTasks(currentUser.current.taskObj.completed);
        }, 500);

        return () => clearInterval(taskTimer);
    });

    const handleDelete = (taskId) => {
        socket.emit('DELETE_TASK', taskId);
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
                <button onClick={() => handleDelete(task.id)}>
                    DELETE
                </button>
            </div >
        );
    };

    return (
        <div className={styles.todoTask}>
            <h2>COMPLETED</h2>
            <div>
                {completedTasks && completedTasks.length > 0 ?
                    completedTasks.map(task => renderTask(task))
                    :
                    <span>
                        NO TASKS COMPLETED!
                    </span>
                }
            </div>
        </div>
    );
};

export default WhiteBoardCompleted;
