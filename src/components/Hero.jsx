import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
        <img src="/pic2.jpeg" alt="Ian Mwangi Murigu" className="hero-img" />

        <div className="hero-text">
          <h1>
            Ian Mwangi Murigu
          </h1>

          <h2 className="hero-role">
            Full-Stack Engineer <span className="highlight">(Backend-Strong)</span>
          </h2>

          <p className="hero-description">
            I build secure, scalable web applications using Django, DRF, and React —
            specializing in production-ready APIs, real-time systems, and robust authentication.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="hero-btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
            </div>
      
    </section>

    
    
  );
};

export default Hero;