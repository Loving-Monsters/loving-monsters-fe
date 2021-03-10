import React, { useState, useEffect } from 'react';
import styles from './Ball.css';

export default function Ball({ key, position, xOffset, yOffset, avatar, idle }) {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        if (idle === false) {
            setTimeout(() => {
                rollAnimation();
            }, 100);
        }
    }, [rotate, idle]);



    const rollAnimation = () => {
        rotate < 360 ? setRotate(rotate + 90) : setRotate(0);
    };

    return (
        <div key={key}
            className={styles.container}
            style={{
                transform: `translate3d(${position.x + xOffset}px, ${position.y + yOffset}px, 0)
                rotate(${rotate}deg)`
            }}>
            <img src={avatar}
                className={styles.sprite}
            />
        </div >
    );
}
