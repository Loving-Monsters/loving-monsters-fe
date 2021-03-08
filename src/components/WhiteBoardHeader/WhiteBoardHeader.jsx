import React from 'react';
import styles from './WhiteBoardHeader.css';
const WhiteBoardHeader = ({ handleHome, handleTabChange }) => {
    return (
        <div className={styles.header}>
            <div>
                <div>WHITEBOARD</div>
                <button onClick={handleHome}> Home</button>
                <button onClick={() => handleTabChange('create')}>
                    +
                </button>
            </div>
            <div>
                <button onClick={() => handleTabChange('todo')}>
                    TODO
                </button>
                <button onClick={() => handleTabChange('inProgress')}>
                    IN PROGRESS
                </button>
                <button onClick={() => handleTabChange('completed')}>
                    COMPLETED
                </button>
            </div>
        </div>

    );
};

export default WhiteBoardHeader;
