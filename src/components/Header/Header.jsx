/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../containers/Containers.css';

const Header = ({ handleLogOut }) => {

    return (
        <div className={styles.header}>
            <span className={styles.headerText}>Loving Monsters</span>
            <span><button className={styles.logoutButton} onClick={handleLogOut}>LOGOUT</button></span>
        </div>
    );
};

export default Header;
