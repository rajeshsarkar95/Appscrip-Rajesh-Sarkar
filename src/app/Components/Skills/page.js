"use client";
import React from "react";
import "./Skill.css";
import Navbar from "../Navbar/page";

function Skills() {
  const skillsList = [
    {
      name: "Web Development",
      level: "90%",
      description: "HTML, CSS, JavaScript, React, Next.js",
    },
    {
      name: "Mobile Development",
      level: "85%",
      description: "React Native, Flutter",
    },
    {
      name: "Backend Development",
      level: "80%",
      description: "Node.js, Express, MongoDB, SQL",
    },
    {
      name: "UI/UX Design",
      level: "75%",
      description: "Figma, Adobe XD, Photoshop",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: skill.level }}
              ></div>
            </div>
            <p className="skill-level">{skill.level}</p>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Skills;