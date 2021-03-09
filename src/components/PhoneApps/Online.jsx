/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import styles from '../../containers/Containers.css';
import { SocketContext } from '../../utils/socketController';

const Online = ({ handleHome }) => {
    const socket = useContext(SocketContext);

    const [onlineUsers, setOnlineUsers] = useState([]);

    const renderListItem = ({ userName }) => {
        return (
            <li>
                <p>{userName}</p>
            </li>
        );
    };


    useEffect(() => {
        socket.on('USERS_ONLINE', onlineUsers => {
            setOnlineUsers(onlineUsers);
        });
    }, [socket]);

    useEffect(() => {
        socket.emit('USERS_ONLINE', null);
    }, []);

    return (
        <div className={styles.online}>
            <div className={styles.backbackground}>
                <button className={styles.back} onClick={handleHome}>&#60;
                    <span className={styles.backspan}>Back</span></button>
            </div>
            <div>
                <ul>
                    {onlineUsers.map(user => renderListItem(user))}
                </ul>
            </div>
        </div>
    );
};

export default Online;
