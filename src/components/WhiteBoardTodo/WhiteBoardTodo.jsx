import React from 'react';
// import styles from './WhiteBoardTodo.css';

const WhiteBoardTodo = ({ socket, todoTasks }) => {

    const handleInProgress = (task) => {
        const updatedTask = {
            ...task,
            status: 'inProgress'
        };

        socket.emit('UPDATE_TASK', updatedTask);
    };

    const renderTask = (task) => {
        const displayTimestamp = new Date(task.timestamp).toLocaleString();

        return (
            <li>
                <div>
                    {task.authorName}
                    {displayTimestamp}
                    {task.text}
                </div>
                <button onClick={() => handleInProgress(task)}>
                    IN PROGRESS
                </button>
                <hr />
            </li>
        );
    };

    return (
        <div>
            <ul>
                {todoTasks.length > 0 ?
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
