import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Footer = () => {
  return(
    <Wrapper>
      <address>
        <a href="https://ku.edu.np/">Kathmandu University</a><br />
        DOCSE<br />
        Dhulikhel,Kavre<br />
        Nepal
      </address>


      {/* footer section */}
      </Wrapper>
  );
};

const Wrapper = styled.footer`
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: center;
color: #fff;
font-size: 15px;

address {
  text-align: center;
  padding: 10px;
}

a{
  color:green;
  transition: 0.5s ;
}

a:hover{
  color:#fff;
}

`;

export default Footer;
