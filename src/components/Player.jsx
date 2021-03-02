import React, { useState, useEffect } from 'react';

export default function Player({ position, direction, userName }) {
    const [frame, setFrame] = useState(0);
    const [sprite, setSprite] = useState('/sprites/1/down1.png');
    const runDirections = ['up', 'down', 'left', 'right'];

    useEffect(() => {
        setTimeout(() => {
            if(runDirections.includes(direction)) {
                runAnimation();
            }
        }, 120);
    }, [frame]);

    const runAnimation = () => {
        frame < 4 ? setFrame(frame + 1) : setFrame(0);
        setSprite(`/sprites/${avatar}/${runDirections}${frame}.png`);
    };

    return (
        <div
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        >
            <span>{userName}</span>
            <img src={sprite} />
        </div>
    );
}
