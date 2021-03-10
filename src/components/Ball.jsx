import React from 'react'

export default function Ball({ position, rotate }) {
    return (
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            zIndex: '1',
            position: 'absolute',
            border: 'solid black',
            transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotate}deg) `,
            overflow: 'hidden',
            backgroundImage: 'url(/snotball.png)',
            backgroundSize: '100%',
            backgroundPosition: 'center'

            // transform: `rotate(${rotate}deg)`

        }}>
            {/* <img src="/snotball.png"
                style={{
                    width: '100px',
                    height: '100px',

                }} /> */}
        </div >
    );
}
