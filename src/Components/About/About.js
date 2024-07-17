import React, { useState } from "react";
import "./About.css";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="about" id="about">
        <div className="left">
          <img src="images/about.png" alt="About" />
        </div>
        <div className="right">
          <h5>About</h5>
          <h3>About Me</h3>
          <p>
            A motivated individual with in depth knowledge of languages like
            C,C++ and JavaScript, can use my skills to the advantages of the
            company while having the scope to develop my own skills. My
            interests are in frontend development and love to work as a Web
            developer.
          </p>
          <p className="reachme">
            <b>Reach me</b> :- <span>krabhishek0321@gmail.com</span>
          </p>

          <div className="tab-titles">
            <p
              className={`tab-links ${
                activeTab === "skills" ? "active-link" : ""
              }`}
              onClick={() => handleTabClick("skills")}
            >
              Skills
            </p>
            <p
              className={`tab-links ${
                activeTab === "experience" ? "active-link" : ""
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </p>
            <p
              className={`tab-links ${
                activeTab === "education" ? "active-link" : ""
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </p>
          </div>

          <div
            className={`tab-contents ${
              activeTab === "skills" ? "active-tab" : ""
            }`}
            id="skills"
          >
            <ul>
              <li>
                <span>HTML</span>
                <br />
              </li>
              <li>
                <span>CSS</span>
                <br />
              </li>
              <li>
                <span>JavaScript</span>
                <br />
              </li>
              <li>
                <span>MERN Stack</span>
                <br />
              </li> 
              <li>
                <span>C/C++</span>
                <br />
              </li>
              <li>
                <span>Tailwind CSS</span>
                <br />
              </li>
              <li>
                <span>BootStrap</span>
                <br />
              </li>
              <li>
                <span>My SQL</span>
                <br />
              </li>

            </ul>
          </div>
          <div
            className={`tab-contents ${
              activeTab === "experience" ? "active-tab" : ""
            }`}
            id="experience"
          >
            <ul>
              <li>
                <span>2023</span>
                <br />
                Web Developer Intern at Oasis InfoByte (
                <b className="bold">1 Month</b>-Remote)
              </li>
              <li>
                <span>2023</span>
                <br />
                Web Developer Intern at Bharat Intern (
                <b className="bold">1 Month</b>-Remote)
              </li>
            </ul>
          </div>
          <div
            className={`tab-contents ${
              activeTab === "education" ? "active-tab" : ""
            }`}
            id="education"
          >
            <ul>
              <li>
                <span>B.Tech</span>
                <br />
                Chameli Devi Group of Instutions, Indore |{" "}
                <b className="bold">8.13 CGPA</b> | (2020-2024)
              </li>
              <li>
                <span>Higher Secondary Education</span>
                <br />
                Bihar School Examination Board, Patna |{" "}
                <b className="bold">71.6%</b> | (2020)
              </li>
              <li>
                <span>Higher School Education</span>
                <br />
                Bihar School Examination Board, Patna |{" "}
                <b className="bold">65.2%</b> | (2018)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
