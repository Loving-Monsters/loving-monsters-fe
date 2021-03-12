import React from 'react';

export default function WinBox({ handleReset, handleEndGame }) {
    return (
        <>
            <div style={{
                zIndex: 1,
                height: '200px',
                width: '200px',
                position: 'absolute'
            }}>
                <div>Congrats You Win!  Everyone is very hoppy for you</div>
                <button onClick={() => handleReset()}> Play Again</button>
                <button onClick={() => handleEndGame()}>Leave</button>
            </div>
        </>
    );
}

