import React, { useState } from 'react';
import MessageInput from '../MessageInput/MessageInput';

const MessageUserDetail = ({ currentUser, socket, messageArray, selectedUser }) => {
    const [input, setInput] = useState('');


    const handleSendMessage = (text) => {
        console.log(text);
        console.log(currentUser.current);
        console.log(selectedUser);

        const newMessage = {
            senderId: currentUser.current.id,
            senderName: currentUser.current.userName,
            recieverId: selectedUser.id,
            recieverName: selectedUser.userName,
            text,
        };

        console.log(newMessage);
    };
    return (
        <MessageInput
            handleSendMessage={handleSendMessage}
        />

    );
};

export default MessageUserDetail;
