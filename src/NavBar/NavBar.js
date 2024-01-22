// NavBar.js
import React from "react";
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import Logo from '../Images/Logo.png';
import { FaUser, FaBook } from "react-icons/fa";

const NavBar = ({ user, onLogout }) => {
  console.log('User object in NavBar:', user);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      onLogout();
      window.location.href = '/';
    }
  };

  return (
    <div className="navbar-container">
      <ul className="nav-items">
      <div className="logo-link">
          <img src={Logo} alt="Books Heaven Logo" />
        </div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/books-list">Books</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/authors">Author</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        {user && user.UserType === 'admin' && (
          // Add "Add Books" link for admin user
        <li><Link to="/add-books">AddBooks</Link></li>
        )}
       
      </ul>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a Book"
        />
      </div>
      <div className="user-profile">
        {user && (
          <>
            <span>{user.UserName}</span>
            <FaUser />
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
