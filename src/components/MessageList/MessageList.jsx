import React, { useEffect } from 'react';

const MessageList = ({ currentUser, messageObj, selectUserDetail }) => {

    const renderListItem = (listItem, userName) => {
        if (listItem) {

            const selectedUser = { userName };
            if (userName === listItem[0].recieverName) {
                selectedUser.id = listItem[0].recieverId;

            } else {
                selectedUser.id = listItem[0].senderId;
            }

            return (
                <li
                    key={`${userName}li`}
                    onClick={() => selectUserDetail(selectedUser)} >
                    <p key={userName}>{userName}</p>
                    <p key={`${listItem.text}${listItem.id}`}>{listItem.text}</p>
                </li>
            );
        }
        return null;
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
