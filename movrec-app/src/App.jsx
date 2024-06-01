import React from 'react';
import HomePage from './HomePage';
import Login_Page from './Login_Page';
import SignUp_Page from './SignUp_Page';
import Browse from './Browse';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newmovies from './Newmovies';
import Newseasons from './Newseasons';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const theme = {
    colors: {
      heading: "#0bd67e", // Color used for headings (extracted from .logo)
      text: "aliceblue",  // General text color (extracted from body)
      white: "#fff",
      black: "#212529",  // A common dark color
      helper: "#0bd67e", // Color used for helper elements like underlines and buttons
      bg: "#212529",  // Background color for body
      footer_bg: "#000",  // Assuming the footer has the same background as the body
      btn: "#0bd67e",  // Button background color
      border: "#0bd67e",  // Border color, if needed
      hr: "#0bd67e",  // Horizontal rule or line color
      gradient: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",  // Gradient used in the header background
      shadow: "rgba(0, 0, 0, 0.2)",  // General shadow color
      shadowSupport: "rgba(0, 0, 0, 0.5)",  // Supportive shadow color
    },
    media: {mobile: "768px",tab: "998px"},
  };

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <AppWrapper>
      <Header />
      <Content>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Browse" element={<Browse />}></Route>
        <Route path="/Log_In" element={<Login_Page />}></Route>
        <Route path="/Sign_Up" element={<SignUp_Page />}></Route>
        <Route path="/new_movies" element={<Newmovies />}></Route>
        <Route path="/new_seasons" element={<Newseasons />}></Route>
      </Routes>
      <ToastContainer />
      </Content>
      <Footer />
      </AppWrapper>
    </BrowserRouter>
    
    </ThemeProvider>
  );
}; 

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

export default App;