import React from "react";
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p>
        I'm <strong>Ian Mwangi Murigu</strong>, a <strong>backend-focused Full-Stack Engineer</strong> specializing in building 
        secure, scalable web applications using <strong>Django,Django REST Framework, and React.</strong>
      </p>
      
      <p>
        I design systems that <strong>automate workflows</strong>, manage <strong>real-time communication</strong>, integrate third-party APIs 
        (Twilio, SendGrid, Salesforce, Zoho),and implement robust authentication using <strong>JWT and role-based access control</strong>. My 
        focus is building backend architectures that are clean, efficient, and production-ready.
      </p>

      <p>
        With a foundation in <strong>Cybersecurity and Digital Forensics</strong>, I approach development with a <strong>security-first mindset</strong>
        - ensuring data protection,proper access control, and system reliability.
      </p>
      <p>
        Previously, I worked as a Customer Service Coordinator in Dubai, where I collaborated closely with engineering teams, reproduced technical 
        issues, documented bugs, and supported web-based systems. This experience strengthened my ability to <strong>bridge technical execution with
        real user needs</strong>.
      </p>
      <p>
        I have hands-on experience deploying applications to <strong>Render, Vercel, and Railway,</strong> working with <strong>Docker, GitHub Actions, 
        and Linux environments</strong>.I am continuously expanding my DevOps knowledge to build and maintain scalable infrastructure.
      </p>
      <p>
        I'm currently open to <strong>backend or full-stack roles</strong> where I can contribute to building impactful, secure, and high-performance systems.
      </p>
    </section>
  );
};

export default About;
