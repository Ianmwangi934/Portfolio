import React from "react";
import "./skills.css";

const skills = [
  "Django",
  "React",
  "PostgreSQL",
  "WebSockets",
  "REST APIs",
  "API Integration",
  "Cybersecurity",
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span className="skill-pill" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
