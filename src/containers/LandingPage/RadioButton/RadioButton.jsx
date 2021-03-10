/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import SpriteExample from '../SpriteExample/SpriteExample';
import styles from '../CreateUser/CreateUser.css';

const RadioButton = ({ spriteNum, spriteDirection, spriteChecked, handleSpriteChange }) => {
    return (
        <label >
            <input
                className={styles.radioButton}
                name={'sprite'}
                id={`sprite${spriteNum}`}
                type="radio"
                value={spriteNum}
                checked={spriteNum === spriteChecked}
                onChange={() => handleSpriteChange(spriteNum)}
                required
            />
            <SpriteExample
                spriteNum={spriteNum}
                direction={spriteDirection}
            />
        </label>
    );
};

export default RadioButton;
