/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from './Player.css';

export default function Player({ position, direction, userName, avatar }) {
    const [frame, setFrame] = useState(1);
    const [sprite, setSprite] = useState('/sprites/1/down1.png');
    const runDirections = ['up', 'down', 'left', 'right'];

    useEffect(() => {
        setTimeout(() => {
            if (runDirections.includes(direction)) {
                runAnimation();
            }
        }, 200);
    }, [frame]);

    const runAnimation = () => {
        frame < 4 ? setFrame(frame + 1) : setFrame(1);
        setSprite(`/sprites/${avatar}/${direction}${frame}.png`);
    };

    return (
        <div
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        >
            <img className={styles.sprite} src={sprite}/>
            <span>{`x: ${position.x}, y: ${position.y}`}</span>
            <span>{userName}</span>
        </div>
    );
}
