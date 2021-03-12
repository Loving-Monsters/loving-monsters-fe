import React from 'react';
import Player from '../Player/Player';


export default function (filteredUserArray, currentMap) {
    return filteredUserArray.map(user => <Player
        key={user.id}
        position={user.position}
        xOffset={currentMap.current.playerOffsetX}
        yOffset={currentMap.current.playerOffsetY}
        direction={user.dir}
        avatar={user.avatar}
        userName={user.userName}
        idle={user.idle}
    />
    );
}
