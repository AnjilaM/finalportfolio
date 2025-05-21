// src/components/AwardsSection.js
import React from 'react';
import './AwardsSection.css';

const awards = [
  {
    title: "Dil Ganga Scholarship",
    year: "2023",
    description: "Recognized by Kabhre Multiple Campus for Outstanding Project Work",

  },
  {
    title: "Leo of the Year",
    year: "2022",
    description: "Awarded by Kabhre Banepa Leo Club for outstanding leadership and team collaboration.",
  },
  {
    title: " Ruby Jubilee of the Year",
    year: "2024",
    description: "Awarded by Kabhre Banepa Leo Club for outstanding leadership and team collaboration.",
  },
  {
    title: " Best Club Treasurer of the Tenure",
    year: "2024",
    description: "Awarded by Leo District Council 325 G, Nepal for collaboration, communicationa and Reporting",
  },
];

const AwardsSection = () => {
  return (
    <div className="awards-section" id="awards">
      <h2 className="awards-title">Awards & Recognition</h2>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <h3>{award.title}</h3>
            <span className="award-year">{award.year}</span>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
