/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styles from '../../../../containers/Containers.css';

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
                    MARK COMPLETED
                </button>
            </div >
        );
    };

    return (
        <div className={styles.todoTask}>
            <h2>IN PROGRESS</h2>
            <div>
                {inProgressTasks && inProgressTasks.length > 0 ?
                    inProgressTasks.map(task => renderTask(task))
                    :
                    <span>
                        NO TASKS IN PROGRESS!
                    </span>
                }
            </div>
        </div>
    );
};


export default WhiteBoardInProgress;
