import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css"

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institute: "North Maharashtra University, Jalgaon",
      duration: "2020 – 2023",
      result: "CGPA: 72.56%"
    },
    {
      degree: "HSC (12th Science)",
      institute: "Arts, Science and Commerce College, Kurha Kakoda, Jalgaon",
      duration: "2018 – 2020",
      result: "Percentage: 54%"
    },
    {
      degree: "SSC (10th)",
      institute: "Shree Shivaji HighSchool, Kurha Kakoda Jalgaon",
      duration: "2017 – 2018",
      result: "Percentage: 73.80%"
    }
  ];

  return (
    <section
      id="education"
      className="py-5"
      style={{
      //  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        background: "linear-gradient(to top, #12082d, #041f29, #264d5e)", 
      color: "#fff"
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5">Education</h2>
        <div className="row">
          {educationData.map((edu, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-e h-150   shadow">
                <div className="card-body mt-40">
                  <h5 className="card-title">
                    <FaGraduationCap className="me-2" />
                    {edu.degree}
                  </h5>
                  <h6 className="card-subtitle mb-2 ">{edu.institute}</h6>
                  <p className="mb-1"><strong>Duration:</strong> {edu.duration}</p>
                  <p className="mb-0"><strong>{edu.result}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
