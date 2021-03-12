import React from 'react';
import Arrow from '../arrows/Arrow';

export default function(currentMap) {
    return currentMap.current.arrows.map(arrow =>
        <Arrow
            key={arrow.location}
            marginTop={arrow.marginTop}
            marginLeft={arrow.marginLeft}
            rotate={arrow.rotate}
        />
    );
}

