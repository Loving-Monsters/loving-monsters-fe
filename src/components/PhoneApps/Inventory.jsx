/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styles from '../../containers/Containers.css';

const Inventory = ({ handleHome, currentUser }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 500);


        return () => clearInterval(interval);
    }, [count]);
    console.log(count)
    return (
        <div className={styles.inventory}>
            <div className={styles.backbackground}>
                <button className={styles.back} onClick={handleHome}>&#60;
                    <span className={styles.backspan}>Back</span></button>
            </div>
            { currentUser.current.inventory.map(item =>
                <div className={styles.item} key={item.name}>
                    <img className={styles.itemImg} src={item.img} />
                    {item.name}
                </div>
            )}
        </div>
    );
};

export default Inventory;
