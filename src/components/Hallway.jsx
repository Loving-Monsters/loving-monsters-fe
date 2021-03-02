import React from 'react';
import styles from './Hallway.css';

export default function Hallway({ position, dimension }) {

    return (
        <div>
            <div
                className={styles.wall}
                style={{
                    height: dimension.y,
                    width: dimension.x,
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            >
            </div>
            <img 
                className={styles.hallway}
                src="/hallway/MessyHallway.png" />
        </div>
    );
}

