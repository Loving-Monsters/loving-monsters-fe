import React from 'react';

const MessageDetailList = ({ messageArray }) => {

    const renderMessage = ({ senderName, text, timestamp }) => {
        if (text) {
            const displayTimestamp = new Date(Number(timestamp)).toLocaleString();
            return (
                <li key={timestamp}>
                    <div>{`${senderName}: ${text}`}</div>
                    <div>{displayTimestamp}</div>
                </li>
            );
        }
    };

    return (
        <ul>
            {messageArray && messageArray.length > 0 ?
                messageArray.map(message => renderMessage(message))
                :
                null
            }
        </ul>
    );
};

export default MessageDetailList;
