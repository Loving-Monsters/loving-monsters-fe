/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../Containers.css';

export default function WelcomeScreen({ handleNewUser, handleExisitingUser }) {


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
                <button className={styles.welcomeButtons} onClick={handleExisitingUser}>
                    EXISITING USER
                </button>
            </div>
        </div>
    );
}
