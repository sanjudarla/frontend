import React from "react";
import NavBar from "../NavBar/NavBar";
import '../Genres/Genre.css'
import Footer from "../Footer/Footer";

const Genres = ({ user, onLogout }) => {
  const genres = [
    { name: "Fiction" }, 
    { name: "Non-Fiction" },
    { name: "Biography" },
    { name: "Children's" },
    { name: "Cookbooks" }
  ];

  return (
    <>
      <NavBar user={user} onLogout={onLogout} />
      <div className="genre-container">
        <h1>Genres</h1>

        <div className="genres">
          {genres.map(genre => (
            <div key={genre.name} className="genre">
              {genre.name}
            </div>  
          ))}
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Genres;
