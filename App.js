import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Profile from './profile';
import Skills from './Skills';
import Projects from './projects';
import Education from './education';
import Contact from './Contact';
import Navbar from './Nav';
import Footer from './Footer';

function App() {
  // Set 'home' as the initial active section
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />

      {/* Conditional Rendering of Sections */}
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <Profile />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'education' && <Education />}
      {activeSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;
