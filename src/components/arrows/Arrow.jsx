/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styles from './arrows.css';

export default function Arrow({ marginTop, marginLeft, rotate }) {

    return (
        <div
            className={styles.arrows}
            style={{
                top: marginTop,
                left: marginLeft,
                transform: `rotate(${rotate})` 
            }}
        >
            <img src="/Arrow.png" style={{ transform: `rotate(${rotate}deg)` }} />
        </div>
    );
}
