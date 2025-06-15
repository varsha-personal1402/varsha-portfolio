import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
//import { Player } from "@lottiefiles/react-lottie-player";
//import Lottie from "lottie-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


//import { Player } from "@lottiefiles/react-lottie-player"; // OR use lottie-react
//import animationData from "../assets/animation.json"; // path to your Lottie JSON
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero-section d-flex align-items-center" id="home" >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="mb-3">Hi, I'm <span className="text-primary">Varsha Zalte</span></h1>
            <h4 className="mb-4">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Java Developer",
                  1500,
                  "Spring Boot Specialist",
                  1500,
                  "React Enthusiast",
                  1500,
                  "HTML & CSS Designer",
                  1500,
                  "SQL Database User",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h4>
            <p>
              Passionate full-stack developer skilled in Java, Spring Boot, React,
              HTML, CSS, and SQL. I love building responsive and efficient web apps.
            </p>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
             <DotLottieReact
                    src="https://lottie.host/40d65782-f2d9-4fe2-a2ea-0050ce31ea90/1z57wPhOI5.json"
                    loop
                    style={{ height: "300px", width: "300px" }}
                    autoplay
                  />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
