/* eslint-disable max-len */
import React from 'react';
import Hallway from './Hallway.jsx';
import { hallArray } from './hallway';

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
            {renderWalls(hallArray)}
        </div>
    );
};

export default Maps;
