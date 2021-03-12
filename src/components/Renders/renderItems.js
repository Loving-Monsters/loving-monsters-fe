import React from 'react';
import Item from '../Items/Item';


export default function (currentMap) {
    return currentMap.current.items.map(item =>
        <Item
            position={item.position}
            name={item.name}
            key={item.name}
            img={item.img}
            marginTop={item.marginTop}
            marginLeft={item.marginLeft}
            display={item.display}
        />
    );
}
