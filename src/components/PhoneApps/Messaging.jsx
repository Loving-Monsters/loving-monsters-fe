import React, { useEffect, useState } from 'react';
import styles from '../../containers/Containers.css';
import MessageDropDown from '../MessageDropDown/MessageDropDown';
import MessageList from '../MessageList/MessageList';

const Messaging = ({ handleHome, currentUser, socket }) => {
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [messageObj, setMessageObj] = useState([]);
    const [reciever, setReciever] = useState();
    const [messageDetail, setMessageDetail] = useState();


    useEffect(() => {
        socket.on('USERS_ONLINE', onlineUsers => {
            const filteredUsers = onlineUsers.filter(user => user.id !== currentUser.current.id);
            console.log(filteredUsers);
            setOnlineUsers(filteredUsers);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('USERS_ONLINE', null);
        setMessageObj(currentUser.current.messageObj);

        setInterval(() => {
            setMessageObj(currentUser.current.messageObj);
        }, 500);
    }, []);

    const selectUser = (userId) => {
        console.log(userId);
        setMessageDetail(messageObj[userId]);
    };

    // const [messageArray, setMessageArray] = useState([]);

    // useEffect(() => {
    //     socket.on('GET_ALL_MESSAGES', returnedMessageArray => {
    //         setMessageArray(returnedMessageArray);
    //         console.log(messageArray);
    //     });
    // }, [socket]);

    // useEffect(() => {
    //     socket.emit('GET_ALL_MESSAGES', currentUser.id);
    // }, []);

    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>
            {onlineUsers.length > 0 ?
                <MessageDropDown
                    onlineUsers={onlineUsers}
                    selectUser={selectUser} />
                :
                null
            }
            {messageObj ?
                <MessageList
                    selectUser={selectUser}
                    messageObj={messageObj}
                />
                :
                null
            }

        </div>
    );
};

export default Messaging;
