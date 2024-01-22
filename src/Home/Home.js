// Home.js

import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import '../Home/Home.css';
import aspnet from '../Images/aspnet.jpg';
import harrypotter from '../Images/harrypotter.jpg' 
import controlyourmind from '../Images/controlyourmind.jpg'
import react from '../Images/react.jpg';
import sample from '../Images/sample.jpg';
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const Home = ({user}) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    { id: 1, image: aspnet, author: "AuthorName1", name: "BookName1", genre: "Genre1" },
    { id: 2, image: react, author: "AuthorName2", name: "BookName2", genre: "Genre2" },
    { id: 3, image: sample, author: "AuthorName3", name: "BookName3", genre: "Genre3" },
    { id: 4, image: react, author: "AuthorName4", name: "BookName4", genre: "Genre4" },
    { id: 5, image: harrypotter, author: "AuthorName5", name: "BookName5", genre: "Genre5" },
    { id: 6, image: controlyourmind, author: "AuthorName6", name: "BookName6", genre: "Genre6" },
  ];

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <NavBar user={(user)}/>
      <div className="home-page-container">
        <div className="home-box">
          <div className="home-title">
            <h1>Welcome to Books Heaven</h1>
          </div>
        </div>
        <div className="home-sub-title">
          <h2>Latest Books</h2>
        </div>
        <div className="home-image-container">
          {books.map((book) => (
            <figure key={book.id} onClick={() => handleBookClick(book)}>
              <img src={book.image} alt={book.name} />
              <figcaption>
                <p><span>Author:</span> {book.author}</p>
                <p><span>Book Name:</span> {book.name}</p>
                <p><span>Genre:</span> {book.genre}</p>
              </figcaption>
              <div className="read-button"><button>Read</button></div>
            </figure>
          ))}
        </div>
      </div>

      {selectedBook && (
        <Modal onClose={() => setSelectedBook(null)}>
          <img src={selectedBook.image} alt={selectedBook.name} />
          <div className="details">
            <h2>{selectedBook.name}</h2>
            <p><span>Author:</span> {selectedBook.author}</p>
            <p><span>Genre:</span> {selectedBook.genre}</p>
            
            
          </div>
          <div>
            this is the de
            </div>
        </Modal>
      )}

      
      {/* import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import '../Home/Home.css';
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("your-api-endpoint")
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching book data:", error));
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <NavBar />
      <div className="home-page-container">
        <div className="home-box">
          <div className="home-title">
            <h1>Welcome to Books Heaven</h1>
          </div>
        </div>
        <div className="home-sub-title">
          <h2>Latest Books</h2>
        </div>
        <div className="home-image-container">
          {books.map((book) => (
            <figure key={book.id} onClick={() => handleBookClick(book)}>
              <img src={book.image} alt={book.name} />
              <figcaption>
                <p><span>Author:</span> {book.author}</p>
                <p><span>Book Name:</span> {book.name}</p>
                <p><span>Genre:</span> {book.genre}</p>
              </figcaption>
              <div className="read-button"><button>Read</button></div>
            </figure>
          ))}
        </div>
      </div>

      {selectedBook && (
        <Modal onClose={() => setSelectedBook(null)}>
          <img src={selectedBook.image} alt={selectedBook.name} />
          <div className="details">
            <h2>{selectedBook.name}</h2>
            <p><span>Author:</span> {selectedBook.author}</p>
            <p><span>Genre:</span> {selectedBook.genre}</p>
          </div>
          <div>
           
          </div>
        </Modal>
      )} */}


      <div className="blog-container-title">
        <h2>Blog Posts</h2>
      </div>
      <div className="blog-post-container">
        <div className="blog-post">
          <h2>
            This is A Books reading Library
          </h2>
          <p>
            Welcome to our Books Library – a haven for book enthusiasts! Dive into the world of literature where the possibilities are endless.
          </p>

          <p>
            At our library, the joy of reading knows no bounds. Click the <strong>"Read"</strong> button, and embark on a journey into captivating narratives. Once you click, you'll seamlessly transition to a dedicated page offering a comprehensive overview of the selected book.
          </p>

          <p>
            Our library is committed to the spirit of free reading. All you need to do is create an account to unlock a world of literary wonders. Share your thoughts, give ratings, and provide valuable feedback on the books you explore.
          </p>

          <p>
            As we stay committed to keeping you on the literary pulse, our library is regularly updated with the latest releases. Be the first to discover new titles and authors right here.
          </p>

          <p>
            For those with discerning tastes, our library offers a personalized touch. Add your favorite books to your list of favorites and build your reading legacy. Explore and filter books effortlessly based on genres or beloved authors.
          </p>

          <p>
            Join our community of avid readers and bibliophiles. Let the pages of our library be your sanctuary for exploration, engagement, and the sheer pleasure of discovering the next great read.
          </p>

          <p>
            Happy reading! 📚✨
          </p>


        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
