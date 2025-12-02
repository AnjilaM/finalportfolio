// src/components/TimelineSection.js
import React from 'react';
import './TimelineSection.css';

const timelineData = [
   {
    type: 'experience',
    title: 'Operation/Account Manager',
    subtitle: 'October 2020 - Present',
    description: 'Manage stock, stakeholder and VAT Bilings.',
  },
  {
    type: 'experience',
    title: 'Associate Project Manager, Nexus Incorporation',
    subtitle: 'October 2023 - December 2024',
    description: 'Managed Project through Odoo, System and Workflow Improvement, Risk analysis and control.',
  },
  {
    type: 'experience',
    title: 'Project Manager, Axios Softwork',
    subtitle: 'june 2021 - Jan 2023',
    description: 'Led SAAS projects, agile workflows, and oversaw budgets and team velocity.',
  },
  {
    type: 'education',
    title: 'BCA – Tribhuvan University',
    subtitle: '2018 - 2021',
    description: 'Bachelor of Computer Applications, GPA - 3.22',
  },
 
  {
    type: 'education',
    title: '+2 Science – Khwopa Higher Secondary School',
    subtitle: '2016 - 2018',
    description: 'Completed Higher Secondary Education in Science stream, GPA - 2.79', 
  },
];

const TimelineSection = () => {
  return (
    <div className="timeline-section" id="experience">
      <h2 className="timeline-title">Experience & Education</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            className={`timeline-item ${item.type} ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </div>
  );
};

export default TimelineSection;
