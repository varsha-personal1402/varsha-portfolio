import React from 'react';

function Skills() {
  const skillList = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Spring Boot', 'Git', 'PostgreSQL'];

  return (
    <section className="bg-gradient py-5" id="skills">
      <div className="container text-center">
        <h2 className="mb-4">Skills</h2>
        <div className="row">
          {skillList.map((skill, idx) => (
            <div key={idx} className="col-6 col-md-3 mb-3">
              <div className="card p-3 shadow-sm">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
