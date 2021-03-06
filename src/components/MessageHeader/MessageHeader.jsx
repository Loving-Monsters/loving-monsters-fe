import React from 'react';
import styles from './MessageHeader.css';


const MessageHeader = ({ handleHome }) => {

    return (
        <div>
            <div className={styles.header}>
                <div>Messages</div>
                <button onClick={handleHome} >HOME</button>
            </div>
            <div className={styles.spacer} />
        </div>
    );
}
    ;

export default MessageHeader;
