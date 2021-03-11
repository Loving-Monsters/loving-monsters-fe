/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../whiteboard.css';

const WhiteBoardHeader = ({ handleHome, handleTabChange }) => {
    return (
        <div>
            <div>
                <div className={styles.backbackground}>
                    <button className={styles.back} onClick={handleHome}>&#60;
                        <span className={styles.backspan}>Back</span></button>
                </div>
                <button className={styles.createTaskButton} onClick={() => handleTabChange('create')}>
                    Add Task +
                </button>
            </div>
            <div>
                <button className={styles.todoButton} onClick={() => handleTabChange('todo')}>
                    TO-DO
                </button>
                <br /><button className={styles.inProgressButton}onClick={() => handleTabChange('inProgress')}>
                    IN PROGRESS
                </button>
                <br /><button className={styles.completeButton} onClick={() => handleTabChange('completed')}>
                    COMPLETED
                </button>
            </div>
        </div>
    );
};

export default WhiteBoardHeader;
