/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../containers/Containers.css';
import npcObj from '../NPCs/fullNPCs';

const Friendships = ({ handleHome }) => {
    const npcArr = [npcObj.barker, npcObj.cal, npcObj.misscreech];
    return (
        <div className={styles.screen}>
            <button onClick={handleHome}>HOME</button>
            {npcArr.map(npc =>
                <div key={npc.displayName}>
                    <img src={npc.avatarImg} />
                    <div>friendship: {npc.friendship}</div>
                </div>
            )}
        </div>
    );
};

export default Friendships;
