/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import MessageInput from '../MessageInput/MessageInput';
import MessageDetailList from '../MessageDetailList/MessageDetailList';
import styles from '../../../../containers/Containers.css';

const MessageUserDetail = ({ currentUser, socket, messageArray, selectedUser }) => {

    const handleSendMessage = (text) => {
        const newMessage = {
            senderId: currentUser.current.id,
            senderName: currentUser.current.userName,
            recieverId: selectedUser.current.id,
            recieverName: selectedUser.current.userName,
            text,
        };

        socket.emit('SEND_MESSAGE', ({ userId: currentUser.current.id, newMessage }));
    };

    useEffect(() => {
        // console.log(messageArray, selectedUser.current);
    });

    return (
        <div>
            <div className={styles.messageUserDetail}>
                {selectedUser.current.userName}
            </div>
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
