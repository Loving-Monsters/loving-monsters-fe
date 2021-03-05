import React, { useEffect, useState } from 'react';
import styles from '../../containers/Containers.css';
import MessageHome from '../MessageHome/MessageHome';
import MessageHeader from '../MessageHeader/MessageHeader';
import MessageUserDetail from '../MessageUserDetail/MessageUserDetail';


const Messaging = ({ handleHome, currentUser, socket }) => {
    const [messageObj, setMessageObj] = useState([]);
    const [selectedUser, setSelectedUser] = useState('hello!');

    useEffect(() => {
        setMessageObj(currentUser.current.messageObj);
        console.log(currentUser.current.messageObj);

        const messageTimer = setInterval(() => {
            setMessageObj(currentUser.current.messageObj);
        }, 500);

        return () => clearInterval(messageTimer);
    }, []);

    const selectUserDetail = (user) => {
        console.log('selectUserDetail');
        console.log(user);
        setSelectedUser(user);

        if (!messageObj[user.userName]) messageObj[user.userName] = [];

        setDisplayScreen(<MessageUserDetail
            currentUser={currentUser}
            socket={socket}
            messageArray={messageObj[selectedUser]}
            selectedUser={user}
        />);
    };

    const messageScreens = {
        home: <MessageHome
            currentUser={currentUser}
            socket={socket}
            selectUserDetail={selectUserDetail}
            messageObj={messageObj}
        />
    };
    const [displayScreen, setDisplayScreen] = useState(messageScreens.home);



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
            <MessageHeader handleHome={handleHome} />
            {displayScreen}
        </div>
    );
};

export default Messaging;
