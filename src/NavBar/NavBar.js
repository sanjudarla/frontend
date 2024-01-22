import React from "react";
import '../NavBar/NavBar.css'
import Logo from '../Images/Logo.png'
import { FaUser } from "react-icons/fa";

const isLoggedIn = true; // replace with your actual condition
const username = "JohnDoe";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="nav-items">
        <li><a href="/home">Home</a></li>
        <li><a href="/books-list">Books</a></li>
        <li><a href="/favourites">Favourites</a></li>
        <li><a href="/authors">Author</a></li>
        <li><a href="/genres">Genres</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <div className="logo-link">
          <img src={Logo} alt="Books Heaven Logo" />
        </div>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search for a Book" />
      </div>

      {isLoggedIn && (
        <div className="profile-box">
          <span>{username}</span>
          <i><FaUser size={20} color="#fff" /></i>
        </div>
      )}

      {/* <div className="nav-buttons">
        <button>
          Logout
        </button>
      </div> */}

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; 2024 Books Heaven. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NavBar;
