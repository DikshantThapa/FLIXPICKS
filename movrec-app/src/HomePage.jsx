import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>HomePage
      <ul>
           <li>
                <NavLink to="/Sign_Up"><button id="SignUp-button">SignUp</button></NavLink>
            </li>
            <li>
                <NavLink to="/Log_In"><button id="LogIn-button">LogIn</button></NavLink>
            </li>
      </ul>
    </div>
  );
};
export default HomePage