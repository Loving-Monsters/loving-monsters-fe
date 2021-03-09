import React from 'react';
import styles from './Header.css';

const Header = ({ handleLogOut }) => {

    return (
        <div className={styles.Header}>
            <button onClick={handleLogOut}>LOGOUT</button>
        </div>
    );
};

export default Header;
