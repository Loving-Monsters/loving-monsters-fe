import React, { useState, useEffect } from 'react';
import styles from '../../containers/Containers.css';

const Bulletin = ({ handleHome }) => {

    // const renderBulletins = () => bulletinArray.map(bulletin => {
    //     return (
    //         <div key={bulletin.timestamp}>
    //             <p>{bulletin.text}</p>
    //             <p>{bulletin.timestamp}</p>
    //         </div>
    //     );
    // });


    return (
        <div className={styles.screen}>
            <button onClick={handleHome} >HOME</button>
            {/* 
            <form onSubmit={(event) => handleSendBulletin(event)}>
                <input
                    value={input}
                    type="text"
                    onChange={(event) => handleInputChange(event)} />
                <button>SEND</button>
            </form>
            {renderBulletins()} */}
        </div>
    );
};

export default Bulletin;
