import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/Contacts/contact";
import Footer from "./components/footer/footer";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
