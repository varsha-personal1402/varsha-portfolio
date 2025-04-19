import React from "react";
import "./About.css"; // Optional for custom styles

const AboutSection = ({ darkMode }) => {
  return (
    <section id="about" className={`py-5  ${darkMode ? "about-section-dark" : "about-section-light"}`}>
      <div className="container text-center">
        {/*<h2 className="mb-4">About Me</h2>*/}

        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 mb-4">
            {/* Replace the src URL with your actual photo path */}
            <img
              src="./varsha.jpeg"
              alt="My Profile"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "200px" }}
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Varsha Zalte</h3>
            <p className="lead">
              I'm a dedicated full-stack developer skilled in React and Spring Boot. I love turning complex ideas into elegant and efficient code.
            </p>

            {/* Replace resume.pdf with your actual file path */}
            <a
              href="/varsha resume.pdf"
              download
              className="btn btn-primary mt-3"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
