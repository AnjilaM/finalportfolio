// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="animated-bg"></div>

      <div className="landing-content">
        <div className="left-column">
          <h1 className="name">Anjila Manandhar</h1>
          <h2 className="title">Project Manager | ERP Specialist | Agile Practitioner</h2>
          <a href="/anjila_manandhar_cv.pdf" download className="btn"> Download CV </a>
        </div>

        <div className="divider"></div>

        <div className="right-column">
          <img src="/anjila-photo.jpg" alt="Anjila Manandhar" className="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
