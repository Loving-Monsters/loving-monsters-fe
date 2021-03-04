import React from 'react';
import styles from '../../containers/Containers.css';

const Inventory = ({ handleHome }) => {
    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>
            { 'This is the Inventory Page'}
        </div>
    );
};

export default Inventory;
