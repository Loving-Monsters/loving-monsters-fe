import React, { useEffect, useState } from 'react';
import styles from './WhiteBoardTodo.css';

const WhiteBoardTodo = ({ socket, currentUser }) => {
    const [todoTasks, setTodoTasks] = useState(currentUser.current.taskObj.todo);

    useEffect(() => {
        const taskTimer = setInterval(() => {
            setTodoTasks(currentUser.current.taskObj.todo);
            console.log('🚀 ~ file: WhiteBoardTodo.jsx ~ line 20 ~ useEffect ~ currentUser.current.taskObj.todo', currentUser.current.taskObj.todo);
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
                <button onClick={() => handleInProgress(task)}>
                    IN PROGRESS
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
                {todoTasks && todoTasks.length > 0 ?
                    todoTasks.map(task => renderTask(task))
                    :
                    <li>
                        NO TASKS TO DO!
                    </li>
                }
            </ul>
        </div>
    );
};

export default WhiteBoardTodo;
