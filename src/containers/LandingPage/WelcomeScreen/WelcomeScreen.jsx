import React from 'react';
import styles from './WelcomeScreen.css';

export default function WelcomeScreen({ handleNewUser, handleExisitingUser }) {


    return (
        <div className={styles.welcomeScreen}>
            <div>
                LOVING MONSTERS!
            </div>
            <button onClick={handleNewUser}>
                NEW USER
            </button>
            <button onClick={handleExisitingUser}>
                EXISITING USER
            </button>
        </div>
    );
}
