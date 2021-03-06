import React, { useState } from 'react';

const MessageInput = ({ handleSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSendMessage(input);
    };
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={input}
                onChange={({ target }) => setInput(target.value)}
            />
            <button>SEND</button>
        </form >
    );
};

export default MessageInput;
