import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Genre.css";
import Footer from "../Footer/Footer";

const Genres = ({ user, onLogout }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [books, setBooks] = useState([]);

  const genres = [
    { name: "Fiction" },
    { name: "Non-Fiction" },
    { name: "Biography" },
    { name: "Children's" },
    { name: "Cookbooks" }
  ];

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    fetchBooks(event.target.value);
  };

  const fetchBooks = async (genre) => {
    const response = await fetch(`/api/books?genre=${genre}`);
    const data = await response.json();
    setBooks(data);
  };

  const renderBooks = () => {
    if (books.length === 0) {
      return <div>No books found for this genre.</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Count</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.count}</td>
              <td>{book.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <NavBar user={user} onLogout={onLogout} />
      <div className="genre-container">
        <h1>Genres</h1>

        <div className="genres">
          {genres.map((genre) => (
            <div key={genre.name} className="genre">
              <input
                type="radio"
                id={genre.name}
                name="genre"
                value={genre.name}
                checked={selectedGenre === genre.name}
                onChange={handleGenreChange}
              />
              <label htmlFor={genre.name}>{genre.name}</label>
            </div>
          ))}
        </div>

        {renderBooks()}
      </div>
      <Footer />
    </>
  );
};

export default Genres;
