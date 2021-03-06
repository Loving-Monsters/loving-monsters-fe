import React, { useState } from 'react';
import MessageInput from '../MessageInput/MessageInput';
import MessageDetailList from '../MessageDetailList/MessageDetailList';

const MessageUserDetail = ({ currentUser, socket, messageArray, selectedUser }) => {

    const handleSendMessage = (text) => {
        console.log(selectedUser.current);
        const newMessage = {
            senderId: currentUser.current.id,
            senderName: currentUser.current.userName,
            recieverId: selectedUser.current.id,
            recieverName: selectedUser.current.userName,
            text,
        };

        socket.emit('SEND_MESSAGE', ({ userId: currentUser.current.id, newMessage }));
    };

    return (
        <div>
            <MessageInput
                handleSendMessage={handleSendMessage}
            />
            <MessageDetailList
                messageArray={messageArray}
            />
        </div>
    );
};

export default MessageUserDetail;
