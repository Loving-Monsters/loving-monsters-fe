import React from 'react';
import styles from '../../containers/Containers.css';

const Online = ({ handleHome }) => {
    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>
            {'This is the Online Page'}
        </div>
    );
};

export default Online;
