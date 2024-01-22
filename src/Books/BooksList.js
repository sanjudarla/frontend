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
            <div className="whole-book-container">
                <div className="list-books-container">
                    <h1>Books List</h1>
                </div>

                <div className="new-book-text">
                    <h2>New Books</h2>
                </div>
                
                <div className="books-list-container">

                </div>
            </div>


        </>
    );
};

export default BooksList;
