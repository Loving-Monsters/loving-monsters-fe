import React from 'react';
import styles from '../../containers/Containers.css';
import Item from '../Items/Item';

const Inventory = ({ handleHome, currentUser }) => {
    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>
            { currentUser.current.inventory.map(item =>
                <div key={item.name}>
                    <img src={item.img} />
                    {item.name}
                </div>


            )}
        </div>
    );
};

export default Inventory;
