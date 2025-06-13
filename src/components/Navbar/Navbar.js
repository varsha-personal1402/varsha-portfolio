import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-lavender text-white sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">Varsha</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item "><a className="nav-link text-white" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
