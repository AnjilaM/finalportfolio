import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="modern-navbar fixed-top">
      <div className="nav-brand">Anjila</div>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
