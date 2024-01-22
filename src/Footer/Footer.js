import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; 2024 Booksheaven. All rights reserved.</p>
        </div>
        <div className="social-media">
          <a href="/facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="/twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="/instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="contact-info">
        <p>Contact: booksheaven@gmail.com | Phone:+91 9100136620</p>
      </div>
      <div className="language-options">
        <p>Language: English | <a href="#">Change Language</a></p>
      </div>
    </footer>
  );
};

export default Footer;
