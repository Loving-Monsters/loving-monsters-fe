/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect, useState, useRef, useContext } from 'react';
import styles from './messaging.css';
import MessageHome from './MessageHome/MessageHome';
import MessageHeader from './MessageHeader/MessageHeader';
import MessageUserDetail from './MessageUserDetail/MessageUserDetail';
import { SocketContext } from '../../../utils/socketController';



const Messaging = ({ handleHome, currentUser }) => {
    const [messageObj, setMessageObj] = useState([]);
    const selectedUser = useRef({});
    const [displayScreen, setDisplayScreen] = useState('home');
    const socket = useContext(SocketContext);

    useEffect(() => {
        setMessageObj(currentUser.current.messageObj);
        currentUser.current.keyArray = Object.keys(currentUser.current.messageObj);

        const messageTimer = setInterval(() => {
            socket.emit('GET_ALL_MESSAGES', currentUser.current.id);
            setMessageObj(currentUser.current.messageObj);

        }, 1000);

        return () => clearInterval(messageTimer);
    }, []);

    const selectUserDetail = (user) => {
        selectedUser.current = user;

        if (!messageObj[user.userName]) messageObj[user.userName] = [];
        setDisplayScreen('detail');
    };

    const handleMessageHome = () => {
        setDisplayScreen('home');
    };

    return (
        <div className={styles.messaging}>
            <MessageHeader
                handleHome={handleHome}
                handleMessageHome={handleMessageHome}
                displayScreen={displayScreen}
            />
            {displayScreen === 'home' ?
                <MessageHome
                    currentUser={currentUser}
                    socket={socket}
                    selectUserDetail={selectUserDetail}
                    messageObj={messageObj}
                />
                :
                <MessageUserDetail
                    currentUser={currentUser}
                    socket={socket}
                    messageArray={messageObj[selectedUser.current.userName]}
                    selectedUser={selectedUser}
                />
            }
        </div>
    );
};

export default Messaging;
