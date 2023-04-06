import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/countries">Countries</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;