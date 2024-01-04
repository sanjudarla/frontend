import React from "react";
import NavBar from "../NavBar/NavBar";
import './BooksList.css'; // Import the CSS file
import aspnet from '../Images/aspnet.jpg'
import react from '../Images/react.jpg'
import sample from '../Images/sample.jpg'

const BooksList = ({ user, onLogout }) => {

    const addToFavourites = (book) => {
        // Your logic to add the book to favourites goes here
        console.log(`Added ${book.title} to favourites!`);
    };
    return (
        <>
            <NavBar user={user} onLogout={onLogout} />
            <div className="books-container-one">
                <div className="list-books-container">
                    <div className="head-container">
                        <h1>Books List</h1>
                    </div>
                </div>
                <div className="new-book-text">
                    <h2>New Books</h2>
                </div>
                <div className="books-list-container">
                    <div className="new-books-container">
                        <img src={aspnet} alt="Ravu" />
                        <p>Book: ASP.NET Book</p>
                        <p>Author: Ravu</p>
                        <p>Genre: Programming</p>
                        <button className="fav-button" onClick={() => addToFavourites({
                            title: 'ASP.NET Book',
                            author: 'Ravu',
                            genre: 'Programming',
                        })}>Add to Favourites</button>
                    </div>
                    <div className="new-books-container">
                        <img src={react} alt="Satish" />
                        <p>Book: React Book</p>
                        <p>Author: Satish</p>
                        <p>Genre: Web Development</p>
                        <button className="fav-button" onClick={() => addToFavourites({
                            title: 'ASP.NET Book',
                            author: 'Ravu',
                            genre: 'Programming',
                        })}>Add to Favourites</button>
                    </div>
                    <div className="new-books-container">
                       <img src={sample} alt="Naveen" />
                        <p>Book: Sample Book</p>
                        <p>Author: Naveen</p>
                        <p>Genre: Fiction</p>
                        <button className="fav-button" onClick={() => addToFavourites({
                            title: 'ASP.NET Book',
                            author: 'Ravu',
                            genre: 'Programming',
                        })}>Add to Favourites</button>
                    </div>
                    <div className="new-books-container">
                       <img src={aspnet} alt="Ravu" />
                        <p>Book: ASP.NET Book</p>
                        <p>Author: Ravu</p>
                        <p>Genre: Programming</p>
                        <button className="fav-button" onClick={() => addToFavourites({
                            title: 'ASP.NET Book',
                            author: 'Ravu',
                            genre: 'Programming',
                        })}>Add to Favourites</button>
                    </div>
                    <div className="new-books-container">
                        <img src={aspnet} alt="Ravu" />
                        <p>Book: ASP.NET Book</p>
                        <p>Author: Ravu</p>
                        <p>Genre: Programming</p>
                        <button className="fav-button" onClick={() => addToFavourites({
                            title: 'ASP.NET Book',
                            author: 'Ravu',
                            genre: 'Programming',
                        })}>Add to Favourites</button>
                    </div>
                </div>
                <div className="authors-famous-books-container">
                       <h2>Authors Famous Books</h2>
                </div>
               
            </div>
        </>
    );
};

export default BooksList;
