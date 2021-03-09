/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styles from './WhiteBoardInProgress.css';

const WhiteBoardInProgress = ({ socket, currentUser }) => {
    const [inProgressTasks, setInProgressTasks] = useState(currentUser.current.taskObj.inProgress);

    useEffect(() => {
        const taskTimer = setInterval(() => {
            setInProgressTasks(currentUser.current.taskObj.inProgress);
        }, 500);

        return () => clearInterval(taskTimer);
    });

    const handleInProgress = (task) => {
        const updatedTask = {
            ...task,
            status: 'completed'
        };

        socket.emit('UPDATE_TASK', updatedTask);
    };

    const renderTask = (task) => {
        const displayTimestamp = new Date(Number(task.timestamp)).toLocaleString();

        return (
            <div key={task.id} className={styles.listItem}>
                <div className={styles.authorName}>
                    {task.authorName}
                </div>
                <div className={styles.timestamp}>
                    {displayTimestamp}
                </div>
                <div className={styles.text}>
                    {task.text}
                </div>
                <button onClick={() => handleInProgress(task)}>
                    COMPLETED
                </button>
                <hr />
            </div >
        );
    };

    return (
        <div>
            <div>
                TODO
            </div>
            <ul className={styles.listContainer}>
                {inProgressTasks && inProgressTasks.length > 0 ?
                    inProgressTasks.map(task => renderTask(task))
                    :
                    <li>
                        NO TASKS IN PROGRESS!
                    </li>
                }
            </ul>
        </div>
    );
};


export default WhiteBoardInProgress;
