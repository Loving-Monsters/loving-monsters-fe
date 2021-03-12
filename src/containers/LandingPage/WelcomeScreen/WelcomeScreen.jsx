/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../landingpage.css';

export default function WelcomeScreen({ handleNewUser, handleExistingUser }) {

    return (
        <div className={styles.welcomeScreen}>
            <div>
                <p className={styles.title}>
                    LOVING MONSTERS
                </p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.welcomeButtons} onClick={handleNewUser}>
                    NEW USER
                </button>
                <br />
                <button className={styles.welcomeButtons} onClick={handleExistingUser}>
                    EXISTING USER
                </button>
            </div>
        </div>
    );
}
