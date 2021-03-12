import React from 'react';
import Ball from '../Ball/Ball';

export default function(ballArray, currentMap) {
    if (ballArray && ballArray.length > 0) {
        return ballArray.map(ball => <Ball
            key={ball.id}
            xOffset={currentMap.current.playerOffsetX}
            yOffset={currentMap.current.playerOffsetY}
            position={ball.position}
            avatar={ball.avatar}
            idle={ball.idle}
        />
        );
    }
}
