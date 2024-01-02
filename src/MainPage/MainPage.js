// Home.js

import React from 'react';
import '../MainPage/MainPage.css';
import BooksHeaven from '../Images/BooksHeaven.png'
 // Import the CSS file

const MainPage = () => {
  return (
    <div className="main-container">
       <div className='main-image'>
        <img src={BooksHeaven} alt="Book Library Image" />
      </div>
      <header>
        <h1>Welcome to the Book Library</h1>
      </header>
      <section className="featured-books">
        <h2>Featured Books</h2>
        {/* Display some featured books here */}
      </section>
      <section className="explore-section">
        <p>Explore a vast collection of books. Sign in or sign up to get started!</p>
        <button onClick={() => window.location.href = '/login'}>Sign In</button>
        <button onClick={() => window.location.href = '/registration'}>Sign Up</button>
      </section>
      <footer>
        <p>© 2023 Book Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
