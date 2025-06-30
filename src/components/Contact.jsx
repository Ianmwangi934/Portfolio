import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the platforms below:</p>
      <div className="contact-grid">
        <a
          href="https://www.linkedin.com/in/ian-murigu-0a3316327"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Ianmwangi934"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:ianmurigu4@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a
          href="https://wa.me/254748619045"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaWhatsapp className="contact-icon" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
