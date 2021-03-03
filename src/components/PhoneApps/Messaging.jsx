import React, { useEffect, useState } from 'react';

const Messaging = ({ currentUser, socket }) => {
    const [messageArray, setMessageArray] = useState([]);

    useEffect(() => {
        socket.on('GET_ALL_MESSAGES', returnedMessageArray => {
            setMessageArray(returnedMessageArray);
            console.log(messageArray);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('GET_ALL_MESSAGES', currentUser.id);
    }, []);

    return (
        <div>
            {'This is the Messaging Page'}
        </div>
    );
};

export default Messaging;
