import React from "react";

const Skills = () => {
  const skillTags = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "React",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "MySQL",
    "Git & GitHub",
  ];

  const skillProgress = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "Hibernate", level: 80 },
    { name: "React", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "MySQL", level: 80 },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{
        //background: "linear-gradient(to right, #232526, #414345)",
        background: "linear-gradient(to top, #12082d, #041f29, #264d5e)",

        color: "#fff",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row">
          {/* Left column - Skill Tags */}
          <div className="col-md-5 mb-4">
            <h5 className="mb-3">Technologies I Use</h5>
            <div className="d-flex flex-wrap">
              {skillTags.map((skill, index) => (
                <span
                  key={index}
                  className="badge rounded-pill bg-dark text-white fs-6 m-2 px-3 py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - Progress Bars */}
          <div className="col-md-7">
            <h5 className="mb-3">Proficiency</h5>
            {skillProgress.map((skill, index) => (
              <div key={index} className="mb-4">
                <label className="form-label">{skill.name}</label>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
