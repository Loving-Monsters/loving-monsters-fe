/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../containers/Containers.css';
import npcObj from '../NPCs/fullNPCs';

const Friendships = ({ handleHome }) => {
    const npcArr = [npcObj.barker, npcObj.cal, npcObj.misscreech];
    return (
        <div className={styles.friendships}>
            <div className={styles.backbackground}>
                <button className={styles.back} onClick={handleHome}>&#60;</button>
                <span className={styles.backspan}>Back</span>
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
