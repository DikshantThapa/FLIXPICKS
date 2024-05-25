import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";


const header = () => {
  return (
         <header>
          <NavLink to= "/">
          <div class="logo">
            <p class="logo-1">F</p>
            <p class="logo-2">lix</p>
            <p class="logo-1">P</p>
            <p class="logo-2">ix</p>
         </div>
          </NavLink>
          <Navbar />
         </header>
  );
};

export default header;
