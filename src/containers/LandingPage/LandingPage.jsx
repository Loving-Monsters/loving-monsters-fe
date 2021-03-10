/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import CreateUser from './CreateUser/CreateUser';
import ExistingUser from './ExistingUser/ExistingUser';

export default function LandingPage({ handleLogIn, currentUser }) {

    const handleNewUser = () => {
        setDisplayScreen(<CreateUser
            handleLogIn={handleLogIn}
            currentUser={currentUser} />);
    };

    const handleExistingUser = () => {
        setDisplayScreen(<ExistingUser
            currentUser={currentUser}
            handleLogIn={handleLogIn}
        />);
    };
    const [displayScreen, setDisplayScreen] = useState(<WelcomeScreen
        handleNewUser={handleNewUser}
        handleExistingUser={handleExistingUser}
    />);

    return (
        <div>
            {displayScreen}
        </div>
    );
}
