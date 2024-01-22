import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import './BooksList.css'; // Import the CSS file
import aspnet from '../Images/aspnet.jpg';
import react from '../Images/react.jpg';
import sample from '../Images/sample.jpg';
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const BooksList = ({ user, onLogout }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const addToFavourites = (book) => {
    // Your logic to add the book to favourites goes here
    console.log(`Added ${book.name} to favourites!`);
  };

  const books = [
    { id: 1, image: aspnet, author: "AuthorName1", name: "BookName1", genre: "Genre1" },
    { id: 2, image: react, author: "AuthorName2", name: "BookName2", genre: "Genre2" },
    { id: 3, image: sample, author: "AuthorName3", name: "BookName3", genre: "Genre3" },
    // Add more books as needed
  ];

  // Placeholder data for fiction books - replace with actual data
  const fictionBooks = [
    { id: 4, image: 'fictionImage1.jpg', author: "FictionAuthor1", name: "FictionBook1", genre: "FictionGenre1" },
    { id: 5, image: 'fictionImage2.jpg', author: "FictionAuthor2", name: "FictionBook2", genre: "FictionGenre2" },
    { id: 6, image: 'fictionImage3.jpg', author: "FictionAuthor3", name: "FictionBook3", genre: "FictionGenre3" },
    // Add more fiction books as needed
  ];

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <NavBar user={user} onLogout={onLogout} />
      <div className="home-page-container">
        <div className="home-box">
          <div className="book-list-title">
            <h1>Select by your Flavour</h1>
          </div>
        </div>
        <div className="home-sub-title">
          <h2>Latest books</h2>
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
              <div className="read-button"><button onClick={() => addToFavourites(book)}>Read</button></div>
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
            {/* Additional details or actions related to the selected book */}
          </div>
        </Modal>
      )}

      <div className="home-sub-title">
        <h2>Fiction</h2>
      </div>
      <div className="home-image-container">
        {fictionBooks.map((book) => (
          <figure key={book.id} onClick={() => handleBookClick(book)}>
            <img src={book.image} alt={book.name} />
            <figcaption>
              <p><span>Author:</span> {book.author}</p>
              <p><span>Book Name:</span> {book.name}</p>
              <p><span>Genre:</span> {book.genre}</p>
            </figcaption>
            <div className="read-button"><button onClick={() => addToFavourites(book)}>Read</button></div>
          </figure>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BooksList;
