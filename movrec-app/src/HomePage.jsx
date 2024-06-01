import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import backgroundImage from '../images/background-img.png';


const HomePage = () => {
  return (
    <MainhomePage>
    <div className="header-content">
                <h1>Over 20 million movies, TV shows and more.</h1>
                <h3>The <span className="smart">Smart</span> way to pick a movie</h3>
                <button><a href="#">TRY NOW</a></button>
                
    </div>
    </MainhomePage>
  );
};

const MainhomePage = styled.section`
background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${backgroundImage});
background-size: cover;
background-position: center;
position: relative;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
color: #fff;

.header-content{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  margin-top: 100px;
  
}



.smart{
  color: #0bd67e;
}

.header-content button{
  background-color: #0bd67e;
  margin-left: 10px;
  border-radius: 10px;
  padding: 10px;
  width: 180px;
  transition: 0.5s, transform 0.5s;
}

.header-content button:hover{
  background: transparent;
  transform: translateY(-5px);
}

.header-content button a{
  color:white;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  padding-left: 8px;
  text-decoration: none;
  
}

.header-content h1{
  font-size: 60px;
  line-height: 70px;
  font-weight: 600;
  max-width: 650px;
}

.header-content h3{
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 30px;
}


`;
export default HomePage;