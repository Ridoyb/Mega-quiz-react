import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    
    return (
        <div className='header'>
            <h1>Mega Quiz</h1>
            <nav>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/'>Home</NavLink>
            <NavLink  to='statistics'>Statistics</NavLink>
            <NavLink  to='blog'>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;