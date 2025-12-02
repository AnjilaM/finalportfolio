// src/components/ContactSection.js
import React, { useState } from 'react';
import './ContactSection.css';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaEnvelope, FaGitlab } from 'react-icons/fa';

const SERVICE_ID = "service_qzww8rj";
const TEMPLATE_ID = "template_vnnnrrl"; // Contact Us template
const PUBLIC_KEY = "tXb3DXjsBs-hgD7MT";

const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        () => {
          setStatus("Your message has been sent!");
          alert("Your message has been sent!");   // optional alert
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Let's Connect</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* These names must match your EmailJS template variables */}
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="contact-status">{status}</p>}

      <div className="social-icons">
        <a
          href="mailto:anjilamanandhar44@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/anjila-manandhar-8973201b7/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://gitlab.com/users/anjilamanandhar44/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGitlab />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
