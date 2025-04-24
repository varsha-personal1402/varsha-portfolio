import React from "react";
import "./projects.css";

function Projects() {
  const projects = [
    { title: "E-Commerce Website", description: "A full-stack e-commerce site using React and Spring Boot." },
    { title: "Portfolio Website", description: "A personal portfolio built with React." },
    { title: "Student Management System", description: "A CRUD application using React, JSP, and Servlets." },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards p-5">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button type="button" class="btn btn-info m-7">View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
