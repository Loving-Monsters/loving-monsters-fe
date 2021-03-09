import React from 'react';
import Frame from '../../containers/Frame';
import { socket, SocketContext } from '../../utils/socketController';


export default function App() {
    return (
        <SocketContext.Provider value={socket}>
            <Frame />
        </SocketContext.Provider>
    );
}
