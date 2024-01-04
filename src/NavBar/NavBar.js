// NavBar.js
import React, { useState } from 'react';
import { FaHome, FaUser, FaCamera, FaEnvelope, FaComments, FaBook, FaUserCog, FaStar, FaChartBar, FaSearch, FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../NavBar/NavBar.css';

const NavBar = ({ user, onLogout }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (itemName === 'search') {
      setIsSearchOpen(!isSearchOpen);
    } else {
      // Close search box for other menu items
      setIsSearchOpen(false);
    }
  };

  const handleSearchInputChange = (e) => {
    // Handle search input change here
    const searchQuery = e.target.value;
    // Perform search logic as needed
  };

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
          <Link to="/home">
            <span className="icon">
              <FaHome />
            </span>
          </Link>
        </li>

        <li className={`list ${activeItem === 'books' ? 'active' : ''}`} onClick={() => handleItemClick('books')}>
          <Link to="/books-list">
            <span className="icon">
              <FaBook />
            </span>
          </Link>
        </li>

        <li className={`list ${activeItem === 'authors' ? 'active' : ''}`} onClick={() => handleItemClick('authors')}>
          <Link to="/authors">
            <span className="icon">
              <FaUser />
            </span>
          </Link>
        </li>

        <li className={`list ${activeItem === 'genres' ? 'active' : ''}`} onClick={() => handleItemClick('genres')}>
          <Link to="/genres">
            <span className="icon">
              <FaChartBar />
            </span>
          </Link>
        </li>

        <li className={`list ${activeItem === 'favorites' ? 'active' : ''}`} onClick={() => handleItemClick('favorites')}>
          <Link to="/favourites">
            <span className="icon">
              <FaStar />
            </span>
          </Link>
        </li>

        <li className={`list ${activeItem === 'reviews' ? 'active' : ''}`} onClick={() => handleItemClick('reviews')}>
          <Link to="/reviews">
            <span className="icon">
              <FaComments />
            </span>
          </Link>
        </li>

        <li className={`list ${activeItem === 'statistics' ? 'active' : ''}`} onClick={() => handleItemClick('statistics')}>
          <Link to="/statistics">
            <span className="icon">
              <FaChartBar />
            </span>
          </Link>
        </li>

        {user && user.isAdmin && (
          <li className={`list ${activeItem === 'add-books' ? 'active' : ''}`} onClick={() => handleItemClick('add-books')}>
            <span className="icon">
              <FaCamera />
            </span>
            <span className="text">Add Books</span>
            {/* Add logic for "Add Books" functionality here */}
          </li>
        )}

        <li className={`list ${activeItem === 'search' ? 'active' : ''}`} onClick={() => handleItemClick('search')}>
          {isSearchOpen && (
            <div className="search-box">
              <input type="text" placeholder="Search..." onChange={handleSearchInputChange} />
            </div>
          )}
        </li>

        <div className="indicator"></div>
      </ul>

      <li className="user-info">
        {user ? (
          <>
            <span className="user-name">Welcome, {user.UserName}</span>
            <button onClick={() => {onLogout(); navigate('/login')}}>Logout</button>
          </>
        ) : (
          null
        )}
      </li>
    </div>
  );
};

export default NavBar;
