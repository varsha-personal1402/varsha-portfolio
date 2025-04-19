import React from "react";
import "./Navbar.css"; // 👈 Import the styles

const PortfolioNavbar = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top custom-navbar ${
        darkMode ? "dark-mode navbar-dark" : "light-mode navbar-light"}
        ${darkMode ? "about-section-dark" : "about-section-light"}
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home">
          MyPortfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <button
            className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
            onClick={toggleTheme}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
