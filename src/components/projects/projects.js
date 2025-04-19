import React from "react";
import "./projects.css"; // Import the CSS file for styling

const Projects = ({darkMode}) => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "An E-commerce website developed using React, featuring product listings, a shopping cart, and checkout functionality.",
      link: "#", // Add link to the live project or GitHub repo
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website created with React to showcase my skills, projects, and achievements.",
      link: "#", // Add link to the live project or GitHub repo
    },
    {
      title: "User Authentication System",
      description: "A user authentication system built with Spring Boot, including login, registration, and session management features.",
      link: "#", // Add link to the live project or GitHub repo
    },
    {
      title: "Student Management System",
      description: "A Student Management System developed using React, JSP, and Servlets to manage student records, enrollments, and grades.",
      link: "#", // Add link to the live project or GitHub repo
    },
  ];

  return (
    <section id="projects" className={`projects-section min-vh-75    ${darkMode ? "about-section-dark" : "about-section-light"}`}>
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
