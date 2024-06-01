import React from 'react';
import Browse from './Browse';
import Newmovies from './Newmovies';
import Newseasons from './Newseasons';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const Nav = styled.nav`

 text-decoration: none;

.navbar-list{
    padding-left:250px;
    display: flex;
}

.navbar-link{
    text-decoration:none;
    padding-top: 100px;
}

.press{
    padding-top: 25px;
}

.link{
    padding-top: 10px;
}

.navbar-buttons{
    text-decoration:none;
}

 ul li{
    list-style: none; 
   padding-left: 50px;
}

 ul li a{
    font-size: 18px;
    color:white;
    font-weight: bold;
    margin-right: 10px;
    position:relative;
 
}

 ul li a::after{
    content: '';
    width: 0%;
    height: 3px;
    background: #0bd67e; 
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.5s; 
}

 ul li a:hover::after{
    width: 100%;
}

.registration{
    background-color: #0bd67e;
    border-radius: 10px;
    padding: 10px;
    width: 100px;
    transition: 0.5s, transform 0.5s;
    color:white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
   position: center;
}

.registration:hover{
    background: transparent;
    transform: translateY(-5px);
}


    
  `;
  return (
    <Nav>
    <div className='menuIcon'>
        <ul  className='navbar-list'>
        <li className='press'>
                <NavLink className="navbar-link" to="/Browse">Browse</NavLink>
            </li>
            <li className='press'>
                <NavLink className="navbar-link" to="/new_seasons">New Seasons</NavLink>
            </li>
            <li className='press'>
                <NavLink className="navbar-link" to="/new_movies">New Movies</NavLink>
            </li>
             <li className='link'>
                <NavLink className="navbar-buttons" to="/Sign_Up"><button className="registration">Sign Up</button></NavLink>
            </li>
            <li className='link'>
                <NavLink className="navbar-buttons" to="/Log_In"><button className="registration">Log  In</button></NavLink>
            </li> 
        </ul>
    </div>
    </Nav>
  );

  
};

export default Navbar;