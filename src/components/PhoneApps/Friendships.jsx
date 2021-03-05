import React from 'react';
import styles from '../../containers/Containers.css';
import { barker } from '..//NPCs/barker';
import { cal } from '..//NPCs/cal';
import { misscreech } from '..//NPCs/misscreech';


const Friendships = ({ handleHome }) => {
    const npcArr = [barker, cal, misscreech]
    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>
            {npcArr.map(npc =>
                <div key={npc.name}>
                    <img src={npc.img} />
                    <div>friendship: {npc.friendship}</div>
                </div>


            )}
        </div>

    );
};

export default Friendships;
