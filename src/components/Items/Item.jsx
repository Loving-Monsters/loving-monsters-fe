/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './items.css';

export default function Item({ name, img, position, marginTop, marginLeft, display }) {

    return (
        <div className={styles.items}

            style={{
                position,
                top: marginTop,
                left: marginLeft,
                display
            }}
        >
            <span>{name}</span>
            <br />
            <img src={`${img}`} />
        </div>
    );
}
