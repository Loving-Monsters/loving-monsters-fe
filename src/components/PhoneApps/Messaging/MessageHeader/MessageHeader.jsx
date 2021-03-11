/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../messaging.css';


const MessageHeader = ({ handleHome, handleMessageHome, displayScreen }) => {

    return (
        <div>
            <div className={styles.backbackground}>
                {displayScreen !== 'home' ?
                    <button
                        className={styles.back}
                        onClick={handleMessageHome}>&#60;
                        <span className={styles.backspan}>Home</span>
                    </button>
                    :
                    <button
                        className={styles.back}
                        onClick={handleHome}>&#60;
                        <span className={styles.backspan}>Back</span>
                    </button>
                }

            </div>
        </div>
    );
}
    ;

export default MessageHeader;
