import React, { useState, useContext } from 'react';
import { SocketContext } from '../../utils/socketController';

const WhiteBoardCreate = ({ currentUser }) => {
    const [input, setInput] = useState('');
    const socket = useContext(SocketContext);


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
