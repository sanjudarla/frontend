// NavBar.js
import React, { useState } from 'react';
import { FaHome, FaUser, FaCamera, FaEnvelope, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

const NavBar = ({ user, onLogout }) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="navigation">
      <ul>
      
        <li className={`list ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
          <Link to="/home">
            <span className="icon">
              <FaHome />
            </span>
            <span className="text">Home</span>
            <span className="circle"></span>
          </Link>
        </li>
        
        <li className={`list ${activeItem === 'gallery' ? 'active' : ''}`} onClick={() => handleItemClick('gallery')}>
          <Link to="/gallery">
            <span className="icon">
              <FaCamera />
            </span>
            <span className="text">Gallery</span>
            <span className="circle"></span>
          </Link>
        </li>
        <li className={`list ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
          <Link to="/contact">
            <span className="icon">
              <FaEnvelope />
            </span>
            <span className="text">Contact</span>
            <span className="circle"></span>
          </Link>
        </li>
        <li className={`list ${activeItem === 'feedback' ? 'active' : ''}`} onClick={() => handleItemClick('feedback')}>
          <Link to="/feedback">
            <span className="icon">
              <FaComments />
            </span>
            <span className="text">Feedback</span>
            <span className="circle"></span>
          </Link>
        </li>
        
        <div className="indicator"></div>
      </ul>
      <li className="user-info">
          {user ? (
            <>
              <span className="user-name">Welcome, {user.UserName}</span>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            null
          )}
        </li>
    </div>
  );
};

export default NavBar;
