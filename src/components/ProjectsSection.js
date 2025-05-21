// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: "AASA Customer Billing System",
    description: "A web-based billing platform where sellers generate invoices and buyers can securely log in to view their bills. Designed for easy tracking of transactions and customer accessibility.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Intern Management System",
    description: "A platform offering three dashboards—for admins, intern providers, and intern seekers. Each user can register, post jobs, or apply, while admins manage everything centrally.",
    tech: ["Ruby on Rails", "PostgreSQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Room Rental System",
    description: "A web application to manage room listings, bookings, and user interactions efficiently. Designed for property owners and renters to connect easily.",
    tech: ["Ruby on Rails", "PostgreSQL","Bootstrap", "HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
