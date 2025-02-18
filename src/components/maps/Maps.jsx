/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styles from './maps.css';

const Maps = ({ currentMap }) => {
    const renderWalls = objectArray => {
        return objectArray.map(({ position, dimension }, index) => {
            return (
                <div key={index}>
                    <div
                        className={styles.wall}
                        style={{
                            height: dimension.y,
                            width: dimension.x,
                            left: `${position.x}px`,
                            top: `${position.y}px`
                        }}
                    >
                    </div>
                    <img
                        className={styles.mapImg}
                        src={currentMap.mapImage}
                        style={{
                            top: `${currentMap.top}px`,
                            left: `${currentMap.left}px`,
                            height: `${currentMap.height}px`
                        }} />
                </div>
            );
        });
    };

    return (
        <div>
            {renderWalls(currentMap.objectArray)}
        </div>
    );
};

export default Maps;
