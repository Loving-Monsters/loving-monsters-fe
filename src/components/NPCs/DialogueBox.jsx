/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './NPCs.css';

export default function DialogueBox({ currentNpc, handleClose, handleGiveItem, currentUser, storyIndex, thanks }) {
    const handleBeat = () => {
        if (currentNpc.friendship <= 0) {
            return currentNpc.storyBeats1[storyIndex.current];
        } else if (currentNpc.friendship === 1) {
            return currentNpc.storyBeats2[storyIndex.current];
        } else if (currentNpc.friendship > 1) {
            return currentNpc.storyBeats3[storyIndex.current];
        }
    };

    return (
        <div className={styles.dialogueBox}>
            <div className={styles.dialogueName}>
                <span>{currentNpc.displayName}</span>
                <button className={styles.closeButton} onClick={handleClose}>X</button>
            </div>
            <div className={styles.npcSpeak}>
                {currentNpc ?
                    thanks ? <div>{thanks}</div>
                        : handleBeat()
                    : null}
            </div>
            <div className={styles.giveItemFrame}>
                {currentNpc ?
                    currentUser.current.inventory.map(item => {
                        return <div className={styles.giveItem}><button
                            className={styles.itemButton}
                            key={item.name}
                            onClick={() => handleGiveItem(currentNpc, item)}>
                            Give {item.name}</button></div>;
                    })
                    : null}
            </div>
            {currentNpc ? <div>
                <img className={styles.avatarImg} src={currentNpc.avatarImg} /></div>
                : null}
        </ div >
    );
}
