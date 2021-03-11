/* eslint-disable max-len */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import styles from './friendships.css';
import npcObj from '../../NPCs/fullNPCs';

const Friendships = ({ handleHome }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 500);

        return () => clearInterval(interval);
    }, [count]);
    const npcArr = [npcObj.barker, npcObj.cal, npcObj.misscreech, npcObj.nvisible];

    return (
        <div className={styles.friendships}>
            <div className={styles.backbackground}>
                <button className={styles.back} onClick={handleHome}>&#60;
                    <span className={styles.backspan}>Back</span></button>
            </div>
            {npcArr.map(npc =>
                <div className={styles.npcFriendship} key={npc.displayName}>
                    <img src={npc.avatarImg} />
                    <p>friendship: {npc.friendship}</p>
                </div>
            )}
        </div>
    );
};

export default Friendships;
