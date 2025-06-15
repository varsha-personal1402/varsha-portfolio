import React from "react";
import NavigationBar from "./components/navbar/navbar"
import HeroSection from "./components/hero/hero";
import AboutSection from "./components/about/about";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import Education from "./components/Education/Education";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <AboutSection/>
      <Education/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
