/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../../../containers/Containers.css';

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
                <span
                    key={`${userName}li`}
                    onClick={() => selectUserDetail(selectedUser)} >
                    <p className={styles.messageName} key={userName}>{userName}</p>
                    <p key={`${listItem.text}${listItem.id}`}>{listItem.text}</p>
                </span>
            );
        }
        return null;
    };

    return (
        <div className={styles.messageList}>
            {messageObj && currentUser.current.keyArray ?
                currentUser.current.keyArray.map(key => renderListItem(messageObj[key], key))
                :
                null
            }
        </div>
    );
};

export default MessageList;
