import React from 'react';

const Header = ({ handleLogOut }) => {

    return (
        <div>
            <button onClick={handleLogOut}>LOGOUT</button>
        </div>
    );
};

export default Header;
