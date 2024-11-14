import React from 'react';

const educationHistory = [
  {
    degree: "Bachelor of Engineering in Electronics and Computer Science",
    institution: "Fr Conceiao Rodrigues College f Engineering,Bandra",
    year: "2024 - 2027",
    progress: 20,  // Represents 80% completion
  },
  {
    degree: " Diploma",
    institution: "Vidyalankar Polytechnic,Wadala",
    year: "2020 - 2024",
    progress: 100,  // Represents completed
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2>Education</h2>
      {educationHistory.map((edu, index) => (
        <div key={index} className="education-card">
          <h3>{edu.degree}</h3>
          <p><strong>Institution:</strong> {edu.institution}</p>
          <p><strong>Year:</strong> {edu.year}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${edu.progress}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
