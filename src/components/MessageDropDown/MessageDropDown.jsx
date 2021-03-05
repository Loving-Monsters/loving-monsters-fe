import React, { useState } from 'react';

const MessageDropDown = ({ onlineUsers, selectUser }) => {
    const [chosenUser, setChosenUser] = useState(onlineUsers[0].id);

    const renderUsers = (user) => {
        return (
            <option value={user.id}
                key={user.userName}
            >{user.userName}</option>
        );
    };

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                selectUser(chosenUser);
            }}>
                <label htmlFor={'onlineUsers'}>ONLINE USERS</label>
                <br />
                <select
                    name={'onlineUsers'}
                    id={'onlineUsers'}
                    value={chosenUser}
                    onChange={({ target }) => setChosenUser(target.value)}>
                    {onlineUsers.map(user => renderUsers(user))}
                </select>
                <button>Message</button>
            </form>
        </div >
    );
}
    ;




export default MessageDropDown;
