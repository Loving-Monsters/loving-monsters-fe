import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hallway.css';

const Hallway = ({ position, dimension }) => (
    <div
        className={styles.wall}
        style={{
            height: dimension.y,
            width: dimension.x,
            left: `${position.x}px`,
            top: `${position.y}px`
        }}
    ></div>

);

Hallway.propTypes = {
    position: PropTypes.number,
    dimension: PropTypes.number
};

export default Hallway;
