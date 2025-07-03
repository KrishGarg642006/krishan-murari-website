import React from 'react';
import logo from '../assets/krishan-murari-logo.png';
import '../App.css';

const Navbar = ({ sections, activeSection, onNavClick, isScrolled }) => (
  <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <div className="navbar-left">
      <img src={logo} alt="Krishan Murari Logo" className="navbar-logo" />
    </div>
    <div className="nav-links">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={activeSection === id ? 'active' : ''}
          onClick={() => onNavClick(id)}
        >
          {label}
        </button>
      ))}
    </div>
  </nav>
);

export default Navbar; 