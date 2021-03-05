import React, { useEffect, useState } from 'react';

const MessageDetail = ({ socket, currentUser, messageArray }) => {
    const [input, setInput] = useState('');
    const [recieverId, setRecieverId] = useState()

    const handleInputChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        console.log(event.target.value);

        const newMessage = {
            senderId: currentUser.current.id,
            //recieverId: 
        };
    };

    useEffect(() => {
        if (messageArray[0].senderId === currentUser.current.id)
    }, [])

    return (
        <form
            onSubmit={handleSendMessage}
        >
            <input
                type="text"
                value={input}
                onChange={(event) => handleInputChange(event))}
            />
            <button>SEND</button>
        </form>
    )
};
