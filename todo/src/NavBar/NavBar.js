// Importing required libraries
import './NavBar.scss';
import React from 'react';

// Using class component to show navbar
class NavBar extends React.Component{
    render(){
        return(
            <nav className='nav-bar'>
                <h2>Welcome! Create your to-do list here!</h2>
            </nav>
        );
    }
}

export default NavBar;