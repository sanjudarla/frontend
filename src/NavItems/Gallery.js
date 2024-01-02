// Gallery.js

import React from 'react';
import '../Css/Gallery.css'; // Import the CSS file for styling
import NavBar from '../NavBar/NavBar';

const Gallery = ({ user, onLogout }) => {
  const images = [
    'https://placekitten.com/400/300',
    'https://placekitten.com/300/400',
    'https://placekitten.com/350/350',
    'https://placekitten.com/500/300',
    'https://placekitten.com/450/400',
    'https://placekitten.com/400/500',
  ];

  return (
    <div>
        <NavBar user={user} onLogout={onLogout} />
    <div className="gallery-container">

      <h2>Gallery Page</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default Gallery;
