/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from '../../Containers.css';

const SpriteExample = ({ spriteNum, direction }) => {
    const [frame, setFrame] = useState(1);
    const [sprite, setSprite] = useState(`/sprites/${spriteNum}/${direction}1.png`);
    const [userControl, setUserControl] = useState(true);
    const runDirections = ['up', 'down', 'left', 'right'];

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            if (runDirections.includes(direction)) {
                runAnimation();
            }
        }, 200);
        return () => clearTimeout(animationTimer);

    }, [frame]);

    // useEffect(() => {
    //     if (!userControl) {
    //         const spriteTimer = setInterval(() => {

    //         }, 1000);
    //     }
    // }, [userControl]);

    const runAnimation = () => {
        frame < 4 ? setFrame(frame + 1) : setFrame(1);
        setSprite(`/sprites/${spriteNum}/${direction}${frame}.png`);
    };

    return (
        <div className={styles.spriteExample}>
            <img className={styles.sprite} src={sprite} />
        </div>
    );
};


export default SpriteExample;
