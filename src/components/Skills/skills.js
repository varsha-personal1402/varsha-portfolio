

import React from "react";

const SkillsSection = ({ darkMode }) => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Spring Boot", "JSP", "Servlet", "MySQL",
    "Bootstrap", "Git", "GitHub", "REST API"
  ];

  const sectionClass = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  const cardClass = darkMode ? "bg-secondary text-light" : "bg-white text-dark";

  return (
    <section id="skills" className={`py-5 ${sectionClass}    ${darkMode ? "about-section-dark" : "about-section-light"}`}>
      <div className="container text-center">
        <h2 className="mb-4">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className={`p-3 rounded shadow-sm border ${cardClass}`}>
                <strong>{skill}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
