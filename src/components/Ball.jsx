/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

export default function Ball({ position, rotate }) {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            zIndex: '1',
            position: 'absolute',
            transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotate}deg) `
        }}>
            <img src="/snotball.png"
                style={{
                    width: '100px',
                    height: '100px',
                }} />
        </div >
    );
}
