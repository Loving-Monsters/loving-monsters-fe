/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../containers/Containers.css';

const MessageDetailList = ({ messageArray }) => {

    const renderMessage = ({ senderName, text, timestamp }) => {
        if (text) {
            const displayTimestamp = new Date(Number(timestamp)).toLocaleString();
            return (
                <div className={styles.bullItem} key={timestamp}>
                    <span className={styles.timestamp}>{displayTimestamp}</span>
                    <p className={styles.bullText}>{`${senderName}: ${text}`}</p>
                </div>
            );
        }
    };

    return (
        <div>
            {messageArray && messageArray.length > 0 ?
                messageArray.map(message => renderMessage(message))
                :
                null
            }
        </div>
    );
};

export default MessageDetailList;
