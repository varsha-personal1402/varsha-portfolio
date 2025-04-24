import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            I'm Varsha Zalte, a passionate full-stack developer specializing in
            Java and React. I love building user-friendly web applications.
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: varsha@example.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Maharashtra, India</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Me</h3>
          <a href="https://linkedin.com/in/varshazalte" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
          <a href="https://github.com/varshazalte" target="_blank" rel="noopener noreferrer">GitHub</a><br />
          <a href="https://twitter.com/varsha" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Varsha Zalte. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
