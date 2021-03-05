/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './items.css';

export default function Item({ name, img, position, marginTop, marginLeft }) {

    return (
        <div className={styles.items}

            style={{
                position,
                top: marginTop,
                left: marginLeft
            }}
        >
            <span>{name}</span>
            <br />
            <img src={`${img}`} />
        </div>
    );
}
