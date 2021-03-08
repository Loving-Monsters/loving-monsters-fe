/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../../../containers/Containers.css';


const MessageHeader = ({ handleHome }) => {

    return (
        <div>
            <div className={styles.backbackground}>
                <button className={styles.back} onClick={handleHome}>&#60;
                    <span className={styles.backspan}>Back</span></button>
            </div>
        </div>
    );
}
    ;

export default MessageHeader;
