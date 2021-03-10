import React, { useState, useEffect } from 'react';
import styles from './Ball.css';

export default function Ball({ key, position, xOffset, yOffset, avatar }) {
    const [rotate, setRotate] = useState(0);
    const [ballIdle, setBallIdle] = useState(true);

    useEffect(() => {
        if (ballIdle === true) {
            setTimeout(() => {
                console.log(position);
                rollAnimation();
            }, 200);
        }
    }, [rotate, ballIdle]);



    const rollAnimation = () => {
        rotate < 360 ? setRotate(rotate + 30) : setRotate(0);
    };

    return (
        <div key={key} className={styles.container}>
            <img src={avatar}
                className={styles.sprite}
                style={{
                    transform: `translate3d(${position.x + xOffset}px, 
                    ${position.y + yOffset}px, 0) rotate(${rotate}deg)`
                }}
            />
        </div >
    );
}
