import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aryan Karandikar. All rights reserved.</p>
      <div className="social-links">
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://github.com">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
