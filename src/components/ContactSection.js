// src/components/ContactSection.js
import React from 'react';
import './ContactSection.css';
import { FaLinkedin, FaEnvelope, FaYoutube, FaGitlab } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! Thank you for reaching out");
        }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="mailto:anjilamanandhar44@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/anjila-manandhar-8973201b7/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://gitlab.com/users/anjilamanandhar44/" target="_blank" rel="noreferrer">
          <FaGitlab />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
