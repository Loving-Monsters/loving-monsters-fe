/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import CreateUser from './CreateUser/CreateUser';
import ExisitingUser from './ExisitingUser/ExisitingUser';

export default function LandingPage({ handleLogIn, currentUser }) {

    const handleNewUser = () => {
        setDisplayScreen(<CreateUser
            handleLogIn={handleLogIn}
            currentUser={currentUser}
            handleBack={handleBack}
        />);
    };

    const handleExisitingUser = () => {
        setDisplayScreen(<ExisitingUser
            currentUser={currentUser}
            handleLogIn={handleLogIn}
            handleBack={handleBack}
        />);
    };

    const handleBack = () => {
        setDisplayScreen(<WelcomeScreen
            handleNewUser={handleNewUser}
            handleExisitingUser={handleExisitingUser}
        />);
    };
    const [displayScreen, setDisplayScreen] = useState(<WelcomeScreen
        handleNewUser={handleNewUser}
        handleExisitingUser={handleExisitingUser}
    />);

    return (
        <div>
            {displayScreen}
        </div>
    );
}
