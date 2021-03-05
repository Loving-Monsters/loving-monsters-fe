import React, { useState, useEffect } from 'react';

const MessageList = ({ messageObj, selectUserDetail }) => {
    const [keyArray, setKeyArray] = useState([]);

    useEffect(() => {
        setKeyArray(Object.keys(messageObj));
    }, []);

    const renderListItem = (listItem, userName) => {
        <li onClick={selectUserDetail(userName)}>
            <p>{userName}</p>
            <p>{listItem.text}</p>
            <hr />
        </li>;
    };

    return (
        <ul>
            {messageObj ?
                keyArray.map(key => {
                    renderListItem(messageObj[key], key);
                })
                :
                null
            }
        </ul>
    );
};

export default MessageList;
