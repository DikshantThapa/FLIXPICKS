import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthContext';
import { auth, db } from '/src/components/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = () => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      if (currentUser && currentUser.uid) {
        try {
          const docRef = doc(db, 'Users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUsername(docSnap.data().username);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching username: ', error);
        }
      }
    };

    fetchUsername();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li className="press">
            <NavLink className="navbar-link" to="/Browse">Browse</NavLink>
          </li>
          <li className="press">
            <NavLink className="navbar-link" to="/new_seasons">Seasons</NavLink>
          </li>
          <li className="press">
            <NavLink className="navbar-link" to="/new_movies">Movies</NavLink>
          </li>
          {!currentUser ? (
            <>
              <li className="link">
                <NavLink className="navbar-buttons" to="/Sign_Up">
                  <button className="registration">Sign Up</button>
                </NavLink>
              </li>
              <li className="link">
                <NavLink className="navbar-buttons" to="/Log_In">
                  <button className="registration">Log In</button>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="link">
                <NavLink className="navbar-buttons" to="/profile">
                  <button className="registration">{username ? username : 'Loading...'}</button>
                </NavLink>
              </li>
              <li className="link">
                <button className="registration" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  text-decoration: none;

  .navbar-list {
    padding-left: 250px;
    display: flex;
  }

  .navbar-link {
    text-decoration: none;
    padding-top: 100px;
  }

  .press {
    padding-top: 25px;
  }

  .link {
    padding-top: 10px;
  }

  .navbar-buttons {
    text-decoration: none;
  }

  ul li {
    list-style: none;
    padding-left: 50px;
  }

  ul li a {
    font-size: 18px;
    color: white;
    font-weight: bold;
    margin-right: 10px;
    position: relative;
  }

  ul li a::after {
    content: '';
    width: 0%;
    height: 3px;
    background: #0bd67e;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.5s;
  }

  ul li a:hover::after {
    width: 100%;
  }

  .registration {
    background-color: #0bd67e;
    border-radius: 10px;
    padding: 10px 20px; /* Adjusted padding to make the button wider */
    transition: 0.5s, transform 0.5s;
    color: white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registration:hover {
    background: transparent;
    transform: translateY(-5px);
  }
`;

export default Navbar;
