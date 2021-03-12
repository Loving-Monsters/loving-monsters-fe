/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './NPCs.css';

export default function DialogueBox({ currentNpc, handleClose, currentUser, storyIndex }) {
    const [thanks, setThanks] = useState('');

    const handleGiveItem = (npc, item) => {
        currentUser.current.inventory.forEach(userItem => {
            if (userItem.name === item.name) {
                const index = currentUser.current.inventory.indexOf(userItem);

                if (index !== -1) {
                    currentUser.current.inventory.splice(index, 1);
                }
                npc.friendship += item.friendship[npc.name];
            }
            if (item.friendship[npc.name] > 0) {
                setThanks(`${npc.positiveReaction}${item.name}${npc.positiveReaction2}`);
            } else if (item.friendship[npc.name] < 0) {
                setThanks(`${npc.negativeReaction}${item.name}${npc.negativeReaction2}`);
            } else {
                setThanks(`${npc.neutralReaction}${item.name}${npc.neutralReaction2} `);
            }
        });
    };

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
            </div>
            <button className={styles.closeButton} onClick={handleClose}>X</button>
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
