import React from 'react';
//import styles from './WhiteBoardInProgress.css';

const WhiteBoardInProgress = ({ socket, inProgressTasks }) => {

    const handleInProgress = (task) => {
        const updatedTask = {
            ...task,
            status: 'completed'
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
                    COMPLETED
                </button>
                <hr />
            </li>
        );
    };

    return (
        <div>
            <ul>
                {inProgressTasks.length > 0 ?
                    inProgressTasks.map(task => renderTask(task))
                    :
                    <li>
                        NO TASKS TO DO!
                    </li>
                }
            </ul>
        </div>
    );
};

}
;

export default WhiteBoardInProgress;
