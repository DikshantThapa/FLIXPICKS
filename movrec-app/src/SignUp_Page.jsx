import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '/src/components/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp_Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Name:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        console.log("User registered successfully!!");
        toast.success("User Registered Successfully!!", { position: "top-center" });
        await setDoc(doc(db, "Users", user.uid), { email: user.email, username: username });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <FormWrapper>
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Enter username</label>
          </div>
          <div className="form-control">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">I agree to the terms & conditions</label>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
        <p className='end'>
          Already have an account? <NavLink to="/Log_In">Login</NavLink>
        </p>
      </div>
      <ToastContainer />
    </FormWrapper>
  );
};

const FormWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(images/background-img.png);
  background-position: cover;
  background-size: cover;
  padding: 0 0%;
  position: relative;

  .form-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 430px;
    padding: 60px;
    border-radius: 5px;
    background: rgba(100%,100%,100%,0.7);
    transform: translate(-50%,-50%);
  }

  .form-wrapper h2 {
    font-size: 5rem;
  }

  .form-wrapper form {
    margin: 25px 0 65px;
  }

  form .form-control {
    position: relative;
    height: 50px;
    margin-bottom: 16px;
  }

  .form-control input {
    height: 100%;
    width: 100%;
    background: #333;
    outline: none;
    border: none;
    color: #fff;
    font-size: 13px;
    border-radius: 4px;
    padding: 0 20px;
  }

  .form-control input:is(:focus, :valid) {
    padding: 16px 20px 0;
    background: #444;
  }

  .form-control label {
    position: absolute;
    left: 20px;
    top: 50%;
    color: #8c8c8c;
    pointer-events: none;
    font-size: 13px;
    transform: translateY(-50%);
    transition: all 0.1s ease;
  }

  .form-control input:is(:focus, :valid) ~ label {
    font-size: 13px;
    transform: translateY(-130%);
  }

  form button {
    width: 100%;
    padding: 16px 0;
    font-size: 15px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border-radius: 4px;
    background: #0bd67e;
    margin: 25px 0 10px;
    transition: 0.5s;
  }

  form button:hover {
    background: green;
  }

  form .form-help {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  .remember-me input[type="checkbox"] {
    display: inline-block;
  }

  .remember-me label {
    display: inline-block;
  }

  form .remember-me input {
    margin-top: 0;
    margin-right: 5px;
    margin-bottom: 5px;
    accent-color: #333;
  }

  form .form-help :where(label, a) {
    font-size: 15px;
    text-decoration: none;
  }

  .form-wrapper :where(label, p, a) {
    color: #000;
    text-decoration: none;
  }

  .form-wrapper p a {
    font-weight: bold;
  }

  .form-wrapper a:hover {
    color: green;
    transition: 0.2s;
    text-decoration: underline;
  }

  .end {
    font-size: 15px;
  }
`;

export default SignUp_Page;
