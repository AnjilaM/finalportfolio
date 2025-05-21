import React from 'react';
import './SkillsSection.css';

const skills = [
  "Project Management", "Agile", "Scrum", "Jira", "Trello", "ClickUp",
  "HTML", "CSS", "Bootstrap", "Odoo", "Ruby on Rails", "GitLab",
  "ERP", "Budgeting", "Data Analysis"
];

const SkillsSection = () => {
  return (
    <div className="skills-background" id="skills">
  <div className="skills-inner text-center">
    <h2 className="section-title mb-4">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="btn btn-outline-light skill-button">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
