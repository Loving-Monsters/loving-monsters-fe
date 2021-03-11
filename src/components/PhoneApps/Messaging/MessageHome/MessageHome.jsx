/* eslint-disable max-len */
/* eslint-disable react/prop-types */

import React, { useEffect, useState, useContext } from 'react';
import MessageDropDown from '../MessageDropDown/MessageDropDown';
import MessageList from '../MessageList/MessageList';
import { SocketContext } from '../../../../utils/socketController';

const MessageHome = ({ currentUser, selectUserDetail, messageObj }) => {
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('USERS_ONLINE', onlineUsers => {
            const filteredUsers = onlineUsers.filter(user => user.id !== currentUser.current.id);

            setOnlineUsers(filteredUsers);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('USERS_ONLINE', null);

        const onlineUserTimer = setInterval(() => {
            socket.emit('USERS_ONLINE', null);
        }, 1000);

        return () => clearInterval(onlineUserTimer);
    }, []);

    return (
        <div>
            {
                onlineUsers.length > 0 ?
                    <MessageDropDown
                        onlineUsers={onlineUsers}
                        selectUserDetail={selectUserDetail} />
                    :
                    null
            }
            {
                messageObj ?
                    <MessageList
                        selectUserDetail={selectUserDetail}
                        messageObj={messageObj}
                        currentUser={currentUser}
                    />
                    :
                    null
            }
        </div>
    );
};

export default MessageHome;
