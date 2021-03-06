import React from 'react'

export default function DialogueBox({ currentNpc, handleClose, handleGiveItem }) {
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
            <div>

                {currentNpc ?
                    currentNpc.items.map(item => {

                        return < button
                            key={item.name}
                            onClick={() => handleGiveItem(currentNpc, item)}>
                            Give {item.name}</button>
                    })
                    : 'Your mom'}</div>
        </ div >
    );
}
