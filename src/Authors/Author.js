import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./Authors.css";
import Footer from "../Footer/Footer";

class Author {
  constructor(name, books, streak) {
    this.name = name;
    this.books = books;
    this.streak = streak;
  }

  getStreak() {
    return this.streak;
  }

  setStreak(newStreak) {
    this.streak = newStreak;
  }
}

const Authors = ({ user, onLogout }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch authors data from your web API
    fetch("https://your-api-url/authors")
      .then((response) => response.json())
      .then((data) => {
        const authorList = data.map((author) => new Author(author.name, author.books, author.streak));
        setAuthors(authorList);
      })
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  const sortByStreak = () => {
    setAuthors([...authors.sort((a, b) => b.getStreak() - a.getStreak())]);
  };

  const renderAuthors = () => {
    return authors.map((author) => (
      <tr key={author.name}>
        <td>{author.name}</td>
        <td>{author.books.join(", ")}</td>
        <td>{author.streak}</td>
      </tr>
    ));
  };

  return (
    <>
      <NavBar user={user} onLogout={onLogout} />
      <div className="authors-container">
        <h1>Authors Information</h1>
        <button onClick={sortByStreak}>Sort by Streak</button>
        <table>
          <thead>
            <tr>
              <th>Name of the Authors</th>
              <th>Books They Have Written</th>
              <th>Streak of the author</th>
            </tr>
          </thead>
          <tbody>{renderAuthors()}</tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Authors;
