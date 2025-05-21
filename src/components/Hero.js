import React from 'react';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    background: "url('/hero-bg.svg') no-repeat center center / cover",
    height: "100vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  };

  return (
    <section className="hero-section" style={heroStyle} id="home">
      <div className="hero-content">
        <h1>Anjila Manandhar</h1>

        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              One of three columns
            </div>
            <div className="col">
              One of three columns
            </div>
          </div>
        </div>

        <h2>Project Manager | ERP Specialist | Agile Practitioner</h2>
        <a className="cta-button" href="/CV_Anjila_Manandhar.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
