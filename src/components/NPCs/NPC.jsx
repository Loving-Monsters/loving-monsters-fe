/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './NPCs.css';

export default function NPC({ name, img, npcposition, marginTop, marginLeft, storyBeats }) {

    return (
        <div
            className={styles.npcs}
            style={{
                position: {
                    x: npcposition.x,
                    y: npcposition.y
                }, 
                top: marginTop,
                left: marginLeft
            }}
        >
            <span>{name}</span>
            <br />
            <img src={`${img}`} />
        </div>
    );
}
