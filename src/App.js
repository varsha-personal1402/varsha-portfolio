import React, { useState, useEffect } from "react";
import PortfolioNavbar from "./components/Navbar/Navbar";
import AboutSection from "./components/About/About";
//import ProjectsSection from "./components/projects/projects";
//import SkillsSection from "./components/Skills/skills";
import  Projects from "./components/projects/projects"
import ContactSection from "./components/Contacts/contact";
//import SkillsSection from "./components/Skills/skills";
import SkillsSection from "./components/Skills/skills";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div>
      <PortfolioNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container py-5 content">
        <h1 className="text-center" id="home">Welcome to My Portfolio</h1>
        {/*<p className="text-center">
          This is a modern, responsive portfolio with full light/dark mode support.
        </p>*/}
      </div>

      <AboutSection />
      <Projects />
      <SkillsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode}/>
      <Footer/>
    </div>
  );
}

export default App;
