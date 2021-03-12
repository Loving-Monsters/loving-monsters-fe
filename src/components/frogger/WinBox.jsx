/* eslint-disable react/prop-types */

import React from 'react';
import styles from './frogger.css';

export default function WinBox({ handleReset, handleEndGame }) {
    return (
        <>
            <div className={styles.gamebox}>
                <p className={styles.win}>You Win!</p>
                <p className={styles.subwin}>Everyone is very hoppy for you!</p>
                <button onClick={() => handleReset()}> Play Again</button>
                <br />
                <button onClick={() => handleEndGame()}>Leave</button>
            </div>
        </>
    );
}

