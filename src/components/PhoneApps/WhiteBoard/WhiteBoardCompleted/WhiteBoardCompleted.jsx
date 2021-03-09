/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styles from './WhiteBoardCompleted.css';

const WhiteBoardCompleted = ({ socket, currentUser }) => {
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
            <li key={task.id} className={styles.listItem}>
                <div className={styles.authorName}>
                    {task.authorName}
                </div>
                <div className={styles.timestamp}>
                    {displayTimestamp}
                </div>
                <div className={styles.text}>
                    {task.text}
                </div>
                <button onClick={() => handleDelete(task.id)}>
                    DELETE
                </button>
                <hr />
            </li >
        );
    };

    return (
        <div>
            <div>
                TODO
            </div>
            <ul className={styles.listContainer}>
                {completedTasks && completedTasks.length > 0 ?
                    completedTasks.map(task => renderTask(task))
                    :
                    <li>
                        NO TASKS COMPLETED!
                    </li>
                }
            </ul>
        </div>
    );
};

export default WhiteBoardCompleted;
