/* eslint-disable max-len */
import React from 'react';
import Hallway from './Hallway.jsx';
import { objectArray } from './hallway';

const Maps = () => {
    // const [map, setMap] = useState('hallway');

    const renderWalls = objectArray => {
        return objectArray.map(({ position, dimension }, index) => {
            return <Hallway 
                key={index} 
                position={position} 
                dimension={dimension} />;
        });
    };

    return (
        <div>
            {renderWalls(objectArray)}
        </div>
    );
};

export default Maps;
