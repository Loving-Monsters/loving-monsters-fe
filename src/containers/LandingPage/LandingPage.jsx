import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import CreateUser from './CreateUser/CreateUser';
import ExisitingUser from './ExisitingUser/ExisitingUser';

export default function LandingPage({ handleLogIn, currentUser }) {

    const handleNewUser = () => {
        console.log('handleNewuser');
        setDisplayScreen(<CreateUser
            handleLogIn={handleLogIn}
            currentUser={currentUser} />);
    };

    const handleExisitingUser = () => {
        setDisplayScreen(<ExisitingUser
            currentUser={currentUser}
            handleLogIn={handleLogIn}
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
