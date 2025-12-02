import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="modern-navbar fixed-top z-50">
    <div className="navbar-container">
      <div className="nav-brand">Anjila</div>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;
