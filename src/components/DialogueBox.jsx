import React from 'react'

export default function DialogueBox({ currentNpc, handleClose, handleGiveItem, currentUser, storyIndex, thanks }) {
    const handleBeat = () => {
        if (currentNpc.friendship === 0) {
            return currentNpc.storyBeats1[storyIndex.current]
        } else if (currentNpc.friendship === 1) {
            return currentNpc.storyBeats2[storyIndex.current]
        } else if (currentNpc.friendship > 1) {
            return currentNpc.storyBeats3[storyIndex.current]
        }
        console.log(currentNpc)
    };
    console.log(thanks)

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
                    currentUser.current.inventory.map(item => {


                        return < button
                            key={item.name}
                            onClick={() => handleGiveItem(currentNpc, item)}>
                            Give {item.name}</button>
                    }
                    )
                    : null}</div>
            <div>
                {currentNpc ?
                    thanks ? <div>{thanks}</div>

                        : handleBeat()

                    : null}
            </div>
            {currentNpc ? <div><img src={currentNpc.avatarImg} style={{
                height: '250px',
                width: '50%',
                border: 'solid black'

            }} /></div>
                : null}
        </ div >
    );
}
