import React, { useRef, useContext } from 'react';
import Engine from './Engine';
import Phone from './Phone';
import styles from './Containers.css';

export default function Frame() {
    const currentUser = useRef({});

    return (
        <div className={styles.container}>
            <Engine
                currentUser={currentUser}
            />
            <Phone
                currentUser={currentUser}
            />
        </div>
    );
}
