import React from 'react';

const WhiteBoardCompleted = ({ socket, completedTasks }) => {

    const handleInProgress = (taskId) => {

        socket.emit('DELETE_TASK', taskId);
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
                <button onClick={() => handleInProgress(task.id)}>
                    DELETE
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

};

export default WhiteBoardCompleted;
