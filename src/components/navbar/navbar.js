import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./navbar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      expanded={expanded}
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home">
          <strong className="text-white">Varsha</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
