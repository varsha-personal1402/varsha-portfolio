import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./projects.css"

const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with product listing, cart, user authentication, and admin dashboard.",
      tech: ["React", "Spring Boot", "MySQL"],
      live: "https://your-live-demo.com",
      github: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase skills, projects, and resume.",
      tech: ["React", "Bootstrap", "Lottie"],
      live: "https://your-portfolio.com",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Student Management System",
      description: "A web app to manage student records with CRUD functionality and search filters.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      live: "https://your-live-demo.com",
      github: "https://github.com/yourusername/student-management"
    }
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{ background: "linear-gradient(to top, #12082d, #041f29, #264d5e)",
          color: "#fff" }}
    >
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-lg ">
                <div className="card-body d-flex  flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="badge bg-dark text-white me-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="btn  btn-sm me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{border:"1px solid black"}}
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live
                      </a>
                    )}
                    <a
                      href={project.github}
                      className="btn  btn-sm info"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{border:"1px solid black"}}

                    >
                      <FaGithub className="me-1 info" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
