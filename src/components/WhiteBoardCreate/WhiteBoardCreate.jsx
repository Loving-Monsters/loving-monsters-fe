import React, { useState } from 'react';

const WhiteBoardCreate = ({ socket, currentUser }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (input !== '') {
            const newTask = {
                authorName: currentUser.current.userName,
                text: input,
                roomName: currentUser.current.currentRoom,
            };
            socket.emit('CREATE_TASK', newTask);
            setInput('');
        }
    };

    return (
        <div>
            <div>
                CREATE
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setInput(target.value)}
                    value={input}
                />
                <button>CREATE</button>
            </form>
        </div>
    );
};

export default WhiteBoardCreate;
