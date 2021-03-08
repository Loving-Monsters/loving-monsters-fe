import React, { useEffect, useState, useRef } from 'react';
import styles from '../../containers/Containers.css';
import MessageHome from '../MessageHome/MessageHome';
import MessageHeader from '../MessageHeader/MessageHeader';
import MessageUserDetail from '../MessageUserDetail/MessageUserDetail';


const Messaging = ({ handleHome, currentUser, socket }) => {
    const [messageObj, setMessageObj] = useState([]);
    const selectedUser = useRef({});
    const [displayScreen, setDisplayScreen] = useState('home');

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
        console.log(user);
        selectedUser.current = user;

        if (!messageObj[user.userName]) messageObj[user.userName] = [];
        setDisplayScreen('detail');
    };

    return (
        <div className={styles.screen}>
            <MessageHeader handleHome={handleHome} />
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
