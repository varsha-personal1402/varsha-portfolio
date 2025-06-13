import React from 'react';
import './projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase my skills, projects, and resume.',
      details: 'Built with React and Bootstrap. It features smooth scrolling, responsive design, Lottie animations, and dynamic typing effect. Integrated backend with Spring Boot for contact form.',
      techStack: ['React', 'Bootstrap', 'Spring Boot'],
      liveLink: 'https://your-portfolio-url.com',
      githubLink: 'https://github.com/your-username/portfolio',
    },
    {
      title: 'Student Management System',
      description: 'A full-stack web app for managing student data.',
      details: 'Built using React for frontend and Spring Boot for backend. Includes functionalities like adding, updating, deleting students, and PostgreSQL integration for data persistence.',
      techStack: ['React', 'Spring Boot', 'PostgreSQL'],
      liveLink: 'https://your-student-app-url.com',
      githubLink: 'https://github.com/your-username/student-management',
    },
    {
      title: 'E-Commerce Website',
      description: 'An online shopping platform with cart and admin panel.',
      details: 'Users can browse products, add to cart, place orders. Admin can manage products and orders. Built with React, Redux, Spring Boot, and PostgreSQL.',
      techStack: ['React', 'Redux', 'Spring Boot', 'PostgreSQL'],
      liveLink: 'https://your-ecommerce-url.com',
      githubLink: 'https://github.com/your-username/ecommerce-app',
    },
  ];

  return (
    <section className="projects-section py-5 bg-gradient ">
      <div className="container">
        <h2 className="text-center text-white fw-bold mb-5">Projects</h2>
        <div className="row justify-content-center">
          {projectList.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card p-4 rounded shadow text-dark bg-white">
                <h5 className="fw-bold">{project.title}</h5>
                <p className="mb-1"><strong>Overview:</strong> {project.description}</p>
                <p className="mb-2"><strong>Details:</strong> {project.details}</p>
                <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100 mb-2"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary w-100"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
