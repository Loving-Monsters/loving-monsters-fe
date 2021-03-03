import React, { useState, useEvent } from 'react';

const Bulletin = (socket, currentUser) => {
    const [input, setInput] = useState('');
    const [bulletinArray, setBulletinArray] = useState([]);

    // useEvent(() => {
    //     socket.on('RECIEVE_BULLETIN', bulletinObj => {
    //         setBulletinArray([...bulletinArray, bulletinObj]);
    //     });
    // }, [socket]);

    const handleInputChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const handleSendBulletin = (event) => {
        event.preventDefault();
        const newBulletin = {
            roomName: currentUser.currentRoom,
            text: `${currentUser.userName}: ${input}`
        };
        socket.emit('SEND_BULLETIN', newBulletin);
        setInput('');
    };

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
                    type="text"
                    onChange={(event) => handleInputChange(event)} />
                <button>SEND</button>
            </form>
            {renderBulletins()}
        </div>
    );
};

export default Bulletin;
