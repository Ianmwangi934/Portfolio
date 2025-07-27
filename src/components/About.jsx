import React from "react";
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p>
        I'm <strong>Ian Murigu</strong>, a motivated <strong>Full-Stack Web Developer</strong> and <strong>Cybersecurity Enthusiast</strong> based in Kenya. 
        I specialize in building secure, scalable, and user-focused web applications using <strong>Django</strong>, <strong>Django REST Framework</strong>, <strong>React</strong>, and <strong>JavaScript</strong>.
        My mission is to create solutions that automate workflows, simplify processes, and drive business growth.
      </p>

      <p>
        I began studying Cybersecurity and Digital Forensics at Meru University of Science and Technology. 
        Although I couldn't complete my degree due to financial challenges, the program laid a solid foundation in secure systems and digital risk awareness.
        Even while working full-time as a Customer Service Coordinator in Dubai, I remained committed to tech-learning by getting expossed to real world tech related duties , coding, and building in my free time.
      </p>

      <p>
        That experience shaped more than my technical skills. It also sharpened my communication, empathy, and problem-solving-skills I carry into every project I build today.
        I've developed real-world apps that include authentication, role-based access, CRM integrations (Salesforce, Zoho), and tools like Twilio and SendGrid.
        I'm also confident in deploying full-stack apps using platforms like Render, Vercel, and Railway.
      </p>

      <p>
        Outside of tech, I enjoy reading psychology and business books like <em>The Psychology of Money</em> and <em>Rich Dad Poor Dad</em>, which keep me grounded and growth-oriented.
        I'm currently open to <strong>freelance, remote, or hybrid opportunities</strong> where I can collaborate with passionate teams and continue evolving as both a developer and entrepreneur.
      </p>
    </section>
  );
};

export default About;
