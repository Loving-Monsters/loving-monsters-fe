import React from 'react'

export default function DialogueBox({ currentNpc, handleClose }) {
    return (
        <div style={{
            height: '250px',
            width: '100%',
            border: 'solid black',
            position: 'absolute',
            backgroundColor: 'white',
            zIndex: 1,
            bottom: 0
        }}
        >
            {currentNpc.name}
            <button onClick={handleClose}>Close</button>
        </ div>
    );
}
