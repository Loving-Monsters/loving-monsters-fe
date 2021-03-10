import React, { useState, useEffect } from 'react';
import styles from './Ball.css';

export default function Ball({ key, position, avatar }) {
    const [rotate, setRotate] = useState(0);
    const [ballIdle, setBallIdle] = useState(true);

    useEffect(() => {
        if (ballIdle === true) {
            setTimeout(() => {
                rollAnimation();
            }, 200);
        }
    }, [rotate, ballIdle]);

    useEffect(() => {

    }, []);



    const rollAnimation = () => {
        rotate < 360 ? setRotate(rotate + 30) : setRotate(0);
    };

    return (
        <div key={key}>
            <img src={avatar}
                style={{
                    transform: `translate3d(${position.x}px, 
                    ${position.y}px, 0) rotate(${rotate}deg)`
                }}
            />
        </div >
    );
}
