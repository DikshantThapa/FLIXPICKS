import React from 'react';
import Browse from './Browse';
import Newmovies from './Newmovies';
import Newseasons from './Newseasons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='menuIcon'>
        <ul  className='navbar-list'>
        <li>
                <NavLink to="/Browse">Browse</NavLink>
            </li>
            <li>
                <NavLink to="/new_seasons">New Seasons</NavLink>
            </li>
            <li>
                <NavLink to="/new_movies">New Movies</NavLink>
            </li>
            
        </ul>
    </div>
  );
};

export default Navbar;