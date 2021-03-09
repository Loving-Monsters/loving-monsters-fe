
import React from 'react';
import io from 'socket.io-client';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const SocketContext = React.createContext();

export const socket = io.connect(serverUrl);
