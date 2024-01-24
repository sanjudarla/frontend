import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import './BooksList.css';
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import '../Modal/Modal.css'

const BooksList = ({ user, onLogout }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredGenre, setFilteredGenre] = useState(null);

  useEffect(() => {
    // Fetch books from the web API
    axios.get("https://localhost:44331/api/BooksAPI", {
      params: {
        limit: 6,  // Display only 6 books
        sortBy: "publicationDate",
        sortOrder: "desc"
      }
    })
      .then(response => {
        console.log("Data from API:", response.data);
        setBooks(response.data.slice(0, 6));
      })
      .catch(error => console.error("Error fetching book data:", error));
  }, []);

  const addToFavourites = (book) => {
    // Your logic to add the book to favourites goes here
    console.log(`Added ${book.Title} to favourites!`);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleGenreFilter = (genre) => {
    setFilteredGenre(genre);
  };

  const clearGenreFilter = () => {
    setFilteredGenre(null);
  };

  const filteredBooks = filteredGenre
    ? books.filter(book => book.Genre === filteredGenre)
    : books;

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
          {filteredBooks.map((book) => (
            <figure key={book.BookID} onClick={() => handleBookClick(book)}>
              <img src={book.CoverImage} alt={book.Title} />
              <figcaption>
                <p><span>Author:</span> {book.Author}</p>
                <p><span>Book Name:</span> {book.Title}</p>
                <p><span>Genre:</span> {book.Genre}</p>
              </figcaption>
              <div className="home-read-button"><button onClick={() => addToFavourites(book)}>Read</button></div>
            </figure>
          ))}
        </div>
      </div>

      {selectedBook && (
        <Modal onClose={() => setSelectedBook(null)}>
          <img src={selectedBook.CoverImage} alt={selectedBook.Title} />
          <div className="details">
            <h2>{selectedBook.Title}</h2>
            <p><span>Author:</span> {selectedBook.Author}</p>
            <p><span>Genre:</span> {selectedBook.Genre}</p>
          </div>
          <div>

          </div>
        </Modal>
      )}

      <div className="home-sub-title">
        <h2>Fiction</h2>
      </div>
      <div className="home-image-container">
        {filteredBooks.map((book) => (
          <figure key={book.BookID} onClick={() => handleBookClick(book)}>
            {book.Genre === "Fiction" && (
              <>
                <img src={book.CoverImage} alt={book.Title} />
                <figcaption>
                  <p><span>Author:</span> {book.Author}</p>
                  <p><span>Book Name:</span> {book.Title}</p>
                  <p><span>Genre:</span> {book.Genre}</p>
                </figcaption>
                <div className="home-read-button">
                  <button onClick={() => addToFavourites(book)}>Read</button>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>
      <div className="home-sub-title">
        <h2>Action</h2>
      </div>
      <div className="home-image-container">
        {filteredBooks.map((book) => (
          <figure key={book.BookID} onClick={() => handleBookClick(book)}>
            {book.Genre === "Action" && (
              <>
                <img src={book.CoverImage} alt={book.Title} />
                <figcaption>
                  <p><span>Author:</span> {book.Author}</p>
                  <p><span>Book Name:</span> {book.Title}</p>
                  <p><span>Genre:</span> {book.Genre}</p>
                </figcaption>
                <div className="home-read-button">
                  <button onClick={() => addToFavourites(book)}>Read</button>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>
      <div className="home-sub-title">
        <h2>Mystery</h2>
      </div>
      <div className="home-image-container">
        {filteredBooks.map((book) => (
          <figure key={book.BookID} onClick={() => handleBookClick(book)}>
            {book.Genre === "mystery" && (
              <>
                <img src={book.CoverImage} alt={book.Title} />
                <figcaption>
                  <p><span>Author:</span> {book.Author}</p>
                  <p><span>Book Name:</span> {book.Title}</p>
                  <p><span>Genre:</span> {book.Genre}</p>
                </figcaption>
                <div className="home-read-button">
                  <button onClick={() => addToFavourites(book)}>Read</button>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>
      <div className="home-sub-title">
        <h2>Romance</h2>
      </div>
      <div className="home-image-container">
        {filteredBooks.map((book) => (
          <figure key={book.BookID} onClick={() => handleBookClick(book)}>
            {book.Genre === "romance" && (
              <>
                <img src={book.CoverImage} alt={book.Title} />
                <figcaption>
                  <p><span>Author:</span> {book.Author}</p>
                  <p><span>Book Name:</span> {book.Title}</p>
                  <p><span>Genre:</span> {book.Genre}</p>
                </figcaption>
                <div className="home-read-button">
                  <button onClick={() => addToFavourites(book)}>Read</button>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>
      <div className="home-sub-title">
        <h2>Fantacy</h2>
      </div>
      <div className="home-image-container">
        {filteredBooks.map((book) => (
          <figure key={book.BookID} onClick={() => handleBookClick(book)}>
            {book.Genre === "fantacy" && (
              <>
                <img src={book.CoverImage} alt={book.Title} />
                <figcaption>
                  <p><span>Author:</span> {book.Author}</p>
                  <p><span>Book Name:</span> {book.Title}</p>
                  <p><span>Genre:</span> {book.Genre}</p>
                </figcaption>
                <div className="home-read-button">
                  <button onClick={() => addToFavourites(book)}>Read</button>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>
      <div className="home-sub-title">
        <h2>Romance</h2>
      </div>
      <div className="home-image-container">
        {filteredBooks.map((book) => (
          <figure key={book.BookID} onClick={() => handleBookClick(book)}>
            {book.Genre === "romance" && (
              <>
                <img src={book.CoverImage} alt={book.Title} />
                <figcaption>
                  <p><span>Author:</span> {book.Author}</p>
                  <p><span>Book Name:</span> {book.Title}</p>
                  <p><span>Genre:</span> {book.Genre}</p>
                </figcaption>
                <div className="home-read-button">
                  <button onClick={() => addToFavourites(book)}>Read</button>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>


      <Footer />
    </>
  );
};

export default BooksList;
