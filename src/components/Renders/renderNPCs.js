import React from 'react';
import NPC from '../NPCs/NPC';

export default function (currentMap) {
    return currentMap.current.npcs.map(npc =>
        <NPC
            key={npc.name}
            name={npc.displayName}
            img={npc.img}
            npc={npc}
            npcposition={npc.position}
            marginTop={npc.marginTop}
            marginLeft={npc.marginLeft}
        />
    );
}

