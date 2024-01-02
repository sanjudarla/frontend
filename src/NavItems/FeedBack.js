// About.js

import React from 'react';
import NavBar from '../NavBar/NavBar';

function FeedBack({ user, onLogout }) {
  return (
    <div>
        <NavBar/>
      <h2>About Page</h2>
      <p>This is the About page content.</p>
    </div>
  );
}

export default FeedBack;
