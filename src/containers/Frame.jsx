import React, { useRef, useState, useContext, useEffect } from 'react';
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
        window.location.reload(false)

    };

    return (
        <div className={styles.container}>
            {loggedIn ?
                <div>
                    <Header handleLogOut={handleLogOut} />
                    <Engine
                        currentUser={currentUser}
                        loggedIn={loggedIn}
                    />
                    <Phone
                        currentUser={currentUser}
                    />
                </div>
                :
                <LandingPage
                    handleLogIn={handleLogIn}
                    currentUser={currentUser}
                />
            }
        </div>
    );
}
