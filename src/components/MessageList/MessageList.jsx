import React, { useEffect } from 'react';

const MessageList = ({ currentUser, messageObj, selectUserDetail }) => {


    const renderListItem = (listItem, userName) => {
        if (listItem) {
            return (
                <li key={userName} onClick={() => selectUserDetail(userName)} >
                    <p key={userName}>{userName}</p>
                    <p key={userName}>{listItem.text}</p>
                </li>
            );
        }
        return <li>
            "Butts"
        </li>;
    };

    return (
        <ul>
            {messageObj && currentUser.current.keyArray ?
                currentUser.current.keyArray.map(key => renderListItem(messageObj[key], key))
                :
                null
            }
        </ul>
    );
};

export default MessageList;
