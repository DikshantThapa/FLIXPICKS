import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import styled from "styled-components";


const Header = () => {
  return (
         <MainHeader>
          <NavLink to= "/">
          <div className="logo"><a href="#">
            <p className="logo-1">F</p>
            <p className="logo-2">lix</p>
            <p className="logo-1">P</p>
            <p className="logo-2">ix</p>
            </a>
         </div>
          </NavLink>
          <Navbar />
         </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme}) => theme.colors.bg};
  display:flex;
  justify-content:: space-between;
  align-items: center;

  .logo{
    margin: 0;
    padding: 0 10px 0 10px;
    display: inline-flex;
    letter-spacing: 10px;
    align-items: baseline;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    color:${({ theme }) => theme.colors.heading};
    transition: 0.5s, transform 0.5s;
}

.logo a{
    margin: 0;
    padding: 0 0;
    display: inline-flex;
    letter-spacing: 10px;
    align-items: baseline;
    font-weight: bold;
    text-transform: uppercase;
    color:#0bd67e;
    text-decoration: none;
    transition: 0.5s, transform 0.5s;
}

.logo a:hover{    
    color: #fff;
    transform: translateY(-5px);
}

.logo:hover{    
    color: #fff;
    transform: translateY(-5px);
}

.logo-1,.logo-2{
    margin: 0;
    
}

.logo-1{
    font-size: 100px;
}

.logo-2{
    font-size: 50px;
}



`;

export default Header;
