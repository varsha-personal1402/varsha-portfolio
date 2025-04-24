import React from "react";
import "./skills.css";

function Skills() {
  const skillList = ["React", "Spring Boot", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Git","GitHub","REST API's","PostgreSQL"];

  return (
    <section id="skills" className="skills-section ">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillList.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
