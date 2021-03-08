import React, { useState } from 'react';

const WhiteBoardCreate = ({ socket, currentUser }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {

        if (input !== '') {
            const newTask = {
                authorName: currentUser.current,
                text: input,
                roomName: currentUser.current.currentRoom,
            };
            socket.emit('CREATE_TASK', newTask);
            setInput('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setInput(target.value)}
                />
                <button>CREATE</button>
            </form>
        </div>
    );
};

export default WhiteBoardCreate;
