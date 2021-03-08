/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../../../../containers/Containers.css';

const MessageDropDown = ({ onlineUsers, selectUserDetail }) => {
    const [chosenUser, setChosenUser] = useState(onlineUsers[0]);

    const handleSubmit = (event) => {
        event.preventDefault();
        selectUserDetail(chosenUser);
    };

    const handleInput = (userId) => {
        const chosenUser = onlineUsers.find(user => user.id === Number(userId));

        setChosenUser(chosenUser);
    };

    const renderUsers = (user) => {
        return (
            <option
                value={user.id}
                key={user.id}
            >{user.userName}</option>
        );
    };

    return (
        <div className={styles.messageDropdown}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor={'onlineUsers'}>ONLINE USERS</label>
                <br />
                <select
                    name={'onlineUsers'}
                    id={'onlineUsers'}
                    value={chosenUser.id}
                    onChange={({ target }) => handleInput(target.value)}>
                    {onlineUsers.map(user => renderUsers(user))}
                </select>
                <button>Message</button>
            </form>
        </div >
    );
};

export default MessageDropDown;
