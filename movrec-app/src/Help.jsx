import React from 'react';
import styled from 'styled-components';

const Help = () => {
  return (
    <HelpWrapper>
      <form method="post">
        <section role="region" aria-labelledby="info">
          <h2 id="info">Information on FLIXPIX</h2>
          <img src="images/flixpix.png" alt="FLIXPIX Logo" />
          <p>
            FLIXPIX is a sophisticated movie recommendation system that aims to enhance user experience by providing
            personalized movie suggestions. By utilizing collaborative filtering and the K-means algorithm, the system
            analyzes user data to make accurate and efficient recommendations. Developed using PHP and hosted on an
            Apache server, FLIX PIX offers a seamless way for users to discover new movies without extensive browsing.
          </p>
        </section>
        <section role="region" aria-labelledby="movies">
          <h2 id="movies">TV Shows & Movies</h2>
          <div className="question-block">
            <p>
              There are over 20 unique movie titles in our dataset. <br /> FLIXPIX help users to find the movies of
              their choices based on the movie experience of other users in efficient and effective manner without wasting
              much time in useless browsing. <br />
              The more movies you have watched, the better Flixpix gets at recommending TV shows and movies.
            </p>
          </div>
        </section>
        <section role="region" aria-labelledby="started">
          <h2 id="started">Get Started</h2>
          <div className="get-started-content">
            <img src="images/signup.png" alt="Signup Image" />
            <div className="formrow">
              <ul>
                <li>Go to our signup page</li>
                <li>Create an account by entering your email address and creating a password.</li>
              </ul>
            </div>
            <div className="question-block">
              <label htmlFor="css-textarea">Do you have any questions:</label>
            </div>
            <div className="answer">
              <textarea
                id="css-textarea"
                name="css-questions"
                rows="5"
                cols="24"
                placeholder="Who is your supervisor..."
                className="centered-textarea"
              ></textarea>
            </div>
          </div>
        </section>
        <button type="submit">Send</button>
      </form>
    </HelpWrapper>
  );
};

const HelpWrapper = styled.section`
  background-color: #212529;
  color: #fff;
  width: 100%;
  height: 100%;
  background-position: cover;
  background-size: cover;
  padding: 0 0%;
  position: relative;
  font-size: 20px;

  * {
    box-sizing: border-box;
  }

  body {
    background: #111;
    color: #fff;
    font-family: Helvetica;
    margin: 0;
  }

  header {
    width: 100%;
    height: 50px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
  }

  img {
    height: 600px;
    width: 1000px;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: center;
    margin-left: 200px;
  }

  h1 {
    color: #0bd67e;
    font-size: min(5vw, 1.2em);
    text-align: center;
  }

  nav {
    width: 50%;
    max-width: 300px;
    height: 50px;
  }

  nav > ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    padding-inline-start: 0;
    margin-block: 0;
    height: 100%;
  }

  nav > ul > li {
    color: #0bd67e;
    margin: 0;
    padding: 0;
    display: block;
    transition: 0.2s;
  }

  nav > ul > li:hover {
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  li > a {
    color: inherit;
    text-decoration: none;
  }

  main {
    padding-top: 50px;
  }

  section {
    width: 100%;
    margin: 0 auto 10px auto;
    padding: 20px;
  }

  h1,
  h2 {
    font-family: Verdana, Tahoma;
  }

  h2 {
    border-bottom: 4px solid #dfdfe2;
    margin-top: 0px;
    padding-top: 60px;
    color: #0bd67e;
  }

  .info {
    padding: 10px 0 0 5px;
  }

  .formrow {
    margin-top: 30px;
    padding: 0px 15px;
  }

  input {
    font-size: 16px;
  }

  .info label,
  .info input {
    display: inline-block;
  }

  .info input {
    width: 50%;
    text-align: left;
  }

  .info label {
    width: 10%;
    min-width: 55px;
    text-align: right;
  }

  .question-block {
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 20px;
    padding-top: 5px;
  }

  p {
    margin-top: 5px;
    padding-left: 15px;
    font-size: 20px;
  }

  .question {
    border: none;
    padding-bottom: 0;
  }

  .answer {
    align-items: center;
    text-align: center; /* Align text center */
    padding-top: 20px;
  }

  .answers-list {
    list-style: none;
    padding: 0;
  }

  button {
    display: block;
    align-items: center;
    font-size: 23px;
    background: #d0d0d5;
    border: 3px solid #3b3b4f;
    width: 20%;
    margin-left: 40%; 
  }

  footer {
    background-color: #333;
    display: flex;
    color: #0bd67e;
    justify-content: center;
    padding: 10px 0;
  }

  footer a {
    color: #0bd67e;
    transition: 0.2s;
  }

  footer a:hover {
    color: #fff;
  }

  address {
    text-align: center;
    padding: 0.3em;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .centered-textarea {
    width: 80%; /* Adjust width as needed */
    margin: 0 auto; /* Center horizontally */
    padding: 10px;
    font-size: 18px;
    border: 2px solid #ddd;
    border-radius: 4px;
    resize: vertical;
  }
`;

export default Help;
