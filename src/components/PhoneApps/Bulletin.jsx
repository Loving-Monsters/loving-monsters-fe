import React, { useState, useEffect } from 'react';

const Bulletin = ({ socket, currentUser, input, bulletinArray, handleInputChange, handleSendBulletin }) => {

    const renderBulletins = () => bulletinArray.map(bulletin => {
        return (
            <div key={bulletin.timestamp}>
                <p>{bulletin.text}</p>
                <p>{bulletin.timestamp}</p>
            </div>
        );
    });


    return (
        <div>
            <form onSubmit={(event) => handleSendBulletin(event)}>
                <input
                    value={input}
                    type="text"
                    onChange={(event) => handleInputChange(event)} />
                <button>SEND</button>
            </form>
            {renderBulletins()}
        </div>
    );
};

export default Bulletin;
