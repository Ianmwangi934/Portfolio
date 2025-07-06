import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Store",
    description: "A full-stack fashion e-commerce app with product upload, cart, search, and checkout. Built using Django & React.",
    tech: "Django, React, PostgreSQL, REST API, Vercel",
    image: "/project-thumbnails/ecommerce.png",
    links: {
      live: "https://fashion-marketplace-npm5.vercel.app/",     // Replace with actual link
      github: "https://github.com/Ianmwangi934/Fashion_market",
      demo: "https://youtu.be/TAi_iLruJwM?si=1yjKnZQ5dYLcP2cV"
    }
  },
  {
    title: "Trip Planner",
    description: "A travel planning app that fetches routes, calculates fuel stops and total cost, using real-world location data.",
    tech: "Django REST Framework, Google Maps API",
    links: {
      github: "https://github.com/Ianmwangi934/Tripplanner",
      demo: "https://www.youtube.com/watch?v=fh9-VgRehVM"
    }
  },
  {
    title: "Ticket System",
    description: "A real-time support system for handling customer inquiries. Includes role-based access, messaging, notifications, and ticket management.",
    tech: "Django, Django Channels, WebSockets, React, PostgreSQL",
    links: {
      github: "https://github.com/Ianmwangi934/Blogpost",
      demo: "https://youtu.be/R8jo6G-zYQQ"
    }
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            {project.links && (
              <div className="project-links">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo Video
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
