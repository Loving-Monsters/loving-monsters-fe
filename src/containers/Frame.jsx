import React, { useRef, useState, useContext, useEffect } from 'react';
import Engine from './Engine';
import Phone from './Phone';
import styles from './Containers.css';
import LandingPage from './LandingPage/LandingPage';
import Header from '../components/Header/Header';
import { SocketContext } from '../utils/socketController';

const LOGGED_IN = 'LOGGED_IN';
const CURRENT_USER = 'CURRENT_USER';

export default function Frame() {
    const socket = useContext(SocketContext);
    const storedLogIn = localStorage.getItem(LOGGED_IN);
    const storedUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    const [loggedIn, setLoggedIn] = useState(storedLogIn || false);
    const currentUser = useRef(storedUser || {});

    const handleLogIn = () => {
        setLoggedIn(true);
        localStorage.setItem(LOGGED_IN, true);
        localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser.current));
    };

    const handleLogOut = () => {
        setLoggedIn(false);
        localStorage.setItem(LOGGED_IN, false);
    };

    useEffect(() => {
        if (storedUser) {
            socket.emit('REFRESH', storedUser);
        }
    }, []);

    return (
        <div className={styles.container}>
            {loggedIn ?
                <div>
                    <Header handleLogOut={handleLogOut} />
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
                    currentUser={currentUser}
                />
            }
        </div>
    );
}
