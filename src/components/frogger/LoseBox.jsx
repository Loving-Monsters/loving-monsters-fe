/* eslint-disable react/prop-types */

import React from 'react';
import styles from './frogger.css';

export default function LoseBox({ handleReset, handleEndGame }) {
    return (
        <>
            <div className={styles.gamebox}>
                <p className={styles.lose}>You Died!</p>
                <button onClick={() => handleReset()}>Try Again</button>
                <br />
                <button onClick={() => handleEndGame()}>Quit</button>
            </div>
        </>
    );
}
