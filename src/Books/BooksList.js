import React from "react";
import NavBar from "../NavBar/NavBar";
import './BooksList.css'; // Import the CSS file
import aspnet from '../Images/aspnet.jpg'
import react from '../Images/react.jpg'
import sample from '../Images/sample.jpg'
import Footer from "../Footer/Footer";

const BooksList = ({ user, onLogout }) => {

    const addToFavourites = (book) => {
        // Your logic to add the book to favourites goes here
        console.log(`Added ${book.title} to favourites!`);
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
          <figure>
            <img src={aspnet} alt="aspnet" />
            <figcaption>
              <p><span>Author:</span> AuthorName1</p>
              <p><span>Book Name:</span> BookName1</p>
              <p><span>Genre:</span> Genre1</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>

          <figure>
            <img src={react} alt="React" />
            <figcaption>
              <p><span>Author:</span> AuthorName2</p>
              <p><span>Book Name:</span> BookName2</p>
              <p><span>Genre:</span> Genre2</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={sample} alt="sample" />
            <figcaption>
              <p><span>Author:</span> AuthorName3</p>
              <p><span>Book Name:</span> BookName3</p>
              <p><span>Genre:</span> Genre3</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="React" />
            <figcaption>
              <p><span>Author:</span> AuthorName4</p>
              <p><span>Book Name:</span> BookName4</p>
              <p><span>Genre:</span> Genre4</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="aspnet" />
            <figcaption>
              <p><span>Author:</span> AuthorName5</p>
              <p><span>Book Name:</span> BookName5</p>
              <p><span>Genre:</span> Genre5</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="aspnet" />
            <figcaption>
              <p><span>Author:</span> AuthorName5</p>
              <p><span>Book Name:</span> BookName5</p>
              <p><span>Genre:</span> Genre5</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
        </div>
        <div className="home-sub-title">
          <h2>
            Fiction
          </h2>
        </div>
        <div className="home-image-container">
          <figure>
            <img src={aspnet} alt="aspnet" />
            <figcaption>
              <p><span>Author:</span> AuthorName1</p>
              <p><span>Book Name:</span> BookName1</p>
              <p><span>Genre:</span> Genre1</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="React" />
            <figcaption>
              <p><span>Author:</span> AuthorName2</p>
              <p><span>Book Name:</span> BookName2</p>
              <p><span>Genre:</span> Genre2</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={sample} alt="sample" />
            <figcaption>
              <p><span>Author:</span> AuthorName3</p>
              <p><span>Book Name:</span> BookName3</p>
              <p><span>Genre:</span> Genre3</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="React" />
            <figcaption>
              <p><span>Author:</span> AuthorName4</p>
              <p><span>Book Name:</span> BookName4</p>
              <p><span>Genre:</span> Genre4</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="aspnet" />
            <figcaption>
              <p><span>Author:</span> AuthorName5</p>
              <p><span>Book Name:</span> BookName5</p>
              <p><span>Genre:</span> Genre5</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
          <figure>
            <img src={react} alt="aspnet" />
            <figcaption>
              <p><span>Author:</span> AuthorName5</p>
              <p><span>Book Name:</span> BookName5</p>
              <p><span>Genre:</span> Genre5</p>
            </figcaption>
            <div className="read-button"><button>Read</button></div>
          </figure>
        </div>

      </div>
      <Footer/>
        </>
    );
};

export default BooksList;
