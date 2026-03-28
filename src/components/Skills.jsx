import React from "react";
import "./skills.css";

const skills = {
  Backend: [
    "Django",
    "Django REST Framework",
    "Python",
    "PostgreSQL",
    "WebSockets",
    "REST APIs"
  ],
  Frontend: [
    "React",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "GitHub",
    "CI/CD (Vercel, Render,GCP)"
  ],
  Integrations: [
    "API Integration",
    "Third-Party Services",
    "CRM (Zoho, Salesforce)"
  ],
  "Security & Systems": [
    "Cybersecurity",
    "Networking",
    "Linux (Kali & Parrot OS)"
  ]
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2>Technical Skills</h2>

        <div className="skills-categories">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>

              <div className="skills-grid">
                {items.map((skill, index) => (
                  <span className="skill-pill" key={index}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;