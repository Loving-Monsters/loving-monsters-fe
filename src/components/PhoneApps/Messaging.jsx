import React, { useEffect, useState } from 'react';
import styles from '../../containers/Containers.css';

const Messaging = ({ handleHome }) => {
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

            {'This is the Messaging Page'}
        </div>
    );
};

export default Messaging;
