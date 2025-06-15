import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Babhale Infotech Solutions LLP",
      role: "Frontend Developer Intern",
      duration: "Jan 2025 – Present",
      description: [
        "Developing responsive and interactive UI components using React, Bootstrap, and CSS.",
        "Collaborated with the design and backend teams to implement real-world features and optimize user experience.",
        "Built reusable components and handled form validation, state management, and conditional rendering.",
        "Integrated REST APIs and implemented dynamic data display for client-side applications.",
        "Worked with Git and GitHub for version control and team collaboration.",
        "Followed agile methodology and participated in sprint planning and team meetings."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-5"
      style={{
        //background: "linear-gradient(to right, #1f1c2c, #928dab)",
        //background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        background: "linear-gradient(to top, #12082d, #041f29, #264d5e)",

        color: "#fff"
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4 border-start border-light ps-4">
              <h5>
                <FaBriefcase className="me-2" />
                {exp.role}
              </h5>
              <h6 className="text-warning">{exp.company}</h6>
              <p className=" fst-italic ">{exp.duration}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
