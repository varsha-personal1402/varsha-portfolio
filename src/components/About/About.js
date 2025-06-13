import React from 'react';
import './About.css'; // Custom styles
import varshaImage from '../../assets/varsha_image.png';


function About() {
  return (
    <section className="text-white bg-gradient py-5">
      <div className="container bg-gradient">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-4 mb-md-0">
            <img
               src={varshaImage}
               alt="Varsha"
               className="img-fluid rounded-circle about-img"
            />

          </div>

          <div className="col-md-8 fade-in">
            <h2 className="fw-bold">About Me</h2>
            <p>
              Hi, I'm <strong>Varsha</strong> — a passionate <strong>Java Full Stack Developer</strong> with experience in building end-to-end applications using modern technologies like <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong>.
            </p>
            <p>
              I specialize in crafting responsive front-end interfaces and building powerful back-end systems. I love turning complex problems into elegant solutions and constantly strive to improve my skills and code quality.
            </p>
            <ul>
              <li>⚡ Java, Spring Boot, React.js, PostgreSQL</li>
              <li>💡 REST API design and backend integration</li>
              <li>🎯 Clean Code, Responsive Design, and Performance</li>
              <li>🚀 Eager to contribute to meaningful projects</li>
            </ul>
            <a href="/varsha zalte_resume.pdf" download className="btn btn-primary mt-3">
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
