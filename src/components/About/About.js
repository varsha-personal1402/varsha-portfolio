import React from "react";
import "./About.css";
//import profilePhoto from "../assets/photo.jpg"; // Replace with your actual photo
//import resume from "../assets/resume.pdf";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content container text-center">
         <div className="row justify-content-center">
         <div className="col-4  text-white p-5 m-2">
                <img src="/varsha.jpeg" 
                 alt="Profile" 
                 className="profile-photo" />
         </div>
        <div className="about-text col-7  text-white p-5 m-4">
          <h2>Varsha Zalte</h2>
          <p>
            I'm a passionate full-stack developer specializing in React and Spring Boot.
            I build responsive, high-performance applications with a clean and intuitive user experience.
          </p>
          <a href="/varsha resume.pdf" download className="btn-download">
            Download Resume
          </a>
        </div>
         </div>
      </div>
    </section>
  );
}

export default About;
