import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
        <nav className="main-nav">
            <ul>
            <li><NavLink to={ () => onSearch('cats')}>Cats</NavLink></li>
            <li><NavLink to={ () => onSearch('dogs')}>Dogs</NavLink></li>
            <li><NavLink to={ () => onSearch('computers')}>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav