import NavBar from '../NavBar/NavBar';
import React from 'react';

function Contact({ user, onLogout }) {
  return (
    <div>
      <NavBar user={user} onLogout={onLogout} />
      <h2>Contact Page</h2>
      <p>This is the Contact page content.</p>
    </div>
  );
}

export default Contact;
