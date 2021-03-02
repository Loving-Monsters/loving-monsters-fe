import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hallway.css';

const Hallway = ({ position, dimension }) => (
    <div>
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
            className={styles.hallway}
            src="/hallway/MessyHallway.png" />
    </div>

);

Hallway.propTypes = {
    position: PropTypes.object,
    dimension: PropTypes.object
};

export default Hallway;
