import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";
import myPhoto from "../../assets/varsha_image.png";

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
           <img
             src={myPhoto}
             alt="Varsha Zalte"
             className="img-fluid rounded-circle shadow"
             style={{ width: "250px", height: "250px", objectFit: "cover", border: "4px solid #0dcaf0" }}
           />

          </Col>

          <Col md={7}>
            <h2 className="mb-3 text-info">About Me</h2>
            <p className="text-light">
              I'm Varsha Zalte, a passionate Full Stack Developer with hands-on experience in building full-stack applications using technologies like <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, <strong>HTML/CSS</strong>, and <strong>SQL</strong>.
            </p>
            <p className="text-light">
              I've built dynamic web applications like:
              <ul className="text-light">
                <li>✔ E-Commerce Website using React & Spring Boot</li>
                <li>✔ Student Management System (React + Hibernate + PostgreSQL)</li>
                <li>✔ Personal Portfolio with Backend Integration</li>
              </ul>
              My projects focus on clean UI, responsive design, and scalable backend logic.
            </p>
            <a href="/varsha zalte_resume.pdf" download>
              <Button variant="outline-info">Download Resume</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
