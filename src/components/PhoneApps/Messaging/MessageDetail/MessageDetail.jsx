/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../../../utils/socketController';

const MessageDetail = ({ socket, currentUser, messageArray, recieverName }) => {
    const [input, setInput] = useState('');
    const [recieverId, setRecieverId] = useState();
    const socket = useContext(SocketContext);

    const handleInputChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();

        const newMessage = {
            senderId: currentUser.current.id,
            senderName: currentUser.current.userName,
            recieverId,
            recieverName,
            text: input
        };

        socket.emit('SEND_MESSAGE', (currentUser.current.id, newMessage));
    };

    useEffect(() => {
        if (messageArray[0]) {
            if (messageArray[0].senderId === currentUser.current.id) {
                setRecieverId(messageArray[0].recieverId);
            } else {
                setRecieverId(messageArray[0].senderId);
            }
        }
    }, []);

    return (
        <form
            onSubmit={handleSendMessage}
        >
            <input
                type="text"
                value={input}
                onChange={(event) => handleInputChange(event)}
            />
            <button>SEND</button>
        </form>
    );
};

export default MessageDetail;
