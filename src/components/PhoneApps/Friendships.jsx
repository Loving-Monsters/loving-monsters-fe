import React from 'react';
import styles from '../../containers/Containers.css';

const Friendships = ({ handleHome }) => {
    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>

            {'This is the Friendships Page'}
        </div>
    );
};

export default Friendships;
