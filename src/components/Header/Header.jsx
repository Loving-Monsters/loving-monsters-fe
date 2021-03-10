/* eslint-disable react/prop-types */
import React from 'react';

const Header = ({ handleLogOut }) => {

    return (
        <div>
            <h1>Loving Monsters</h1>
            <button onClick={handleLogOut}>LOGOUT</button>
        </div>
    );
};

export default Header;
