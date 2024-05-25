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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Browse" element={<Browse />}></Route>
        <Route path="/Log_In" element={<Login_Page />}></Route>
        <Route path="/Sign_Up" element={<SignUp_Page />}></Route>
        <Route path="/new_movies" element={<Newmovies />}></Route>
        <Route path="/new_seasons" element={<Newseasons />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}; 

export default App;