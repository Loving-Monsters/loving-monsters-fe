import React, { useEffect } from 'react';

export default function LoseBox({ handleReset, handleEndGame, setDisableKeys }) {

    useEffect(() => {
        setDisableKeys(true);
    }, []);

    return (
        <>
            <div style={{
                zIndex: 1,
                height: '200px',
                width: '200px',
                position: 'absolute',
                border: 'solid black'
            }}>
                <div>You Died Horribly</div>
                <button onClick={() => handleReset()}>Try Again</button>
                <button onClick={() => handleEndGame()}>Quit</button>
            </div>
        </>
    );
}
