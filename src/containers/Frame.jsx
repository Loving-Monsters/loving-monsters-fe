import React, { useRef, useState } from 'react';
import Engine from './Engine';
import Phone from './Phone';
import styles from './Containers.css';
import LandingPage from './LandingPage/LandingPage';
import Header from '../components/Header/Header';

export default function Frame() {
    const [loggedIn, setLoggedIn] = useState(false);
    const currentUser = useRef({});

    const handleLogIn = () => {
        setLoggedIn(true);
    };

    const handleLogOut = () => {
        setLoggedIn(false);
    };

    return (
        <div className={styles.container}>
            <Header handleLogOut={handleLogOut} />
            {loggedIn ?
                <div>
                    <Engine
                        currentUser={currentUser}
                    />
                    <Phone
                        currentUser={currentUser}
                    />
                </div>
                :
                <LandingPage
                    handleLogIn={handleLogIn}
                />
            }
        </div>
    );
}
