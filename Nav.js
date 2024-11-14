// Nav.js
import React from 'react';
import './App.css';

function Navbar({ onSectionChange }) {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home" onClick={() => onSectionChange('home')}>Home</a></li>
        <li><a href="#about" onClick={() => onSectionChange('about')}>About</a></li>
        <li><a href="#skills" onClick={() => onSectionChange('skills')}>Skills</a></li>
        <li><a href="#projects" onClick={() => onSectionChange('projects')}>Projects</a></li>
        <li><a href="#education" onClick={() => onSectionChange('education')}>Education</a></li>
        <li><a href="#contact" onClick={() => onSectionChange('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
