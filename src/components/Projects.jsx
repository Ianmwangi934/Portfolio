import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "CareerForge(AI powered Career Development Platform)",
    description: "A Career Assistant system that helps job seekers to tailor their base resume to match the exact role they are applying to.",
    tech: "Django,Django Rest Framework, React(vite), Grok Integration, News API integration,react-pdf,PDF.js,PyMuPDF",
    features: [
      "Users could upload their base resume, which was parsed and analyzed by AI to identify strengths, missing skills, and areas for improvement.",
      "Generated job-tailored resumes and cover letters using AI by matching resumes against specific job descriptions and ATS keywords.",
      "Provided AI-powered mock interviews with personalized technical and behavioral questions, instant feedback, and performance insights."
    ],
    links: {
      github: "https://github.com/Ianmwangi934/Portfolio",
      demo: "https://youtu.be/Qo54HtD1cgk"
    }
  },
  {
    title: "E-Commerce Store",
    description: "A full-stack fashion e-commerce app with product upload, cart, search, and checkout. Built using Django & React.",
    tech: "Django, React, PostgreSQL, REST API, Vercel,CRM for LEAD management(zoho)",
    features: [
      "JWT-based authentication and registration",
      "Browse and search products",
      "Add/remove items from the cart",
      "Enter shipping information and place orders",
      "Payments with Stripe, PayPal or Mpesa"
    ],
    links: {
      live: "",     
      github: "https://github.com/Ianmwangi934/Fashion_marketplace",
      demo: "https://youtu.be/TAi_iLruJwM?si=1yjKnZQ5dYLcP2cV"
    }
  },
  {
  title: "SupportGenius - Real-Time Customer Support System",
  description: "Real-time customer support platform with live chat, role-based authentication, and WebSocket-powered messaging.",
  tech: "Django REST Framework, Django Channels, WebSockets (ASGI), React, PostgreSQL, JWT Authentication, Redis",
  features: [
    "Role-based authentication",
    "WebSocket real-time messaging",
    "JWT token management",
    "Redis channel layer integration"
  ],
  links: {
    github: "https://github.com/Ianmwangi934/SupportGeniusAI",
    demo: "https://youtu.be/xx-0H6b700I"
  }
  },
  {
    title: "Trip Planner",
    description: "A travel planning app that fetches routes, calculates fuel stops and total cost, using real-world location data.",
    tech: "Django REST Framework, Google Maps API",
    features: [
      "Trip Logging & Activity Tracking",
      "Real-time Map Display (OpenStreetMap)",
      "Route Planning & Visualization (Leaflet.js)"
    ],
    links: {
      github: "https://github.com/Ianmwangi934/Tripplanner",
      demo: "https://www.youtube.com/watch?v=fh9-VgRehVM"
    }
  },
  {
    title: "Ticket System",
    description: "A real-time support system for handling customer inquiries. Includes role-based access, messaging, notifications, and ticket management.",
    tech: "Django, Django Channels, WebSockets, React, PostgreSQL",
    features: [
      "Users are able to book flights from real time data",
      "fetched real time flights from an external api"
    ],
    links: {
      github: "https://github.com/Ianmwangi934/Blogpost",
      demo: "https://youtu.be/R8jo6G-zYQQ"
    }
  },

];

const Projects = () => {
  return (
    
      <section className="projects" id="projects">
        <div className="container">
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
           <div className="project-content">
              <p>{project.description}</p>
            {project.features && (
            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
            <p>
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            </div>

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

        </div>
      
    </section>
    
  );
};

export default Projects;
