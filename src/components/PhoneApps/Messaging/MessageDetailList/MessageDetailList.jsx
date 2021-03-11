/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styles from '../messaging.css';

const MessageDetailList = ({ messageArray }) => {

    const renderMessage = ({ senderName, text, timestamp }) => {
        if (text) {
            const displayTimestamp = new Date(Number(timestamp)).toLocaleString();
            return (
                <div className={styles.messageItem} key={timestamp}>
                    <span className={styles.timestamp}>{displayTimestamp}</span>
                    <p className={styles.messageText}>{`${senderName}: ${text}`}</p>
                </div>
            );
        }
    };

    return (
        <div className={styles.messageItems}>
            {messageArray && messageArray.length > 0 ?
                messageArray.map(message => renderMessage(message))
                :
                null
            }
        </div>
    );
};

export default MessageDetailList;
