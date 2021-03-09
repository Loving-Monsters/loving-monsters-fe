import React from 'react';

export default function WelcomeScreen({ handleNewUser, handleExisitingUser }) {


    return (
        <div>
            <div>
                LOVING MONSTERS!
            </div>
            <button onClick={handleNewUser}>
                NEW USER
            </button>
            <button onClick={handleExisitingUser}>
                EXISITING USER
            </button>
        </div>
    );
}
