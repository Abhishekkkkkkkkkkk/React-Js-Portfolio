import React from "react";
import "./Main.css";

function main() {
  return (
    <div className="main" id="main">
      <div className="left">
        <h5>Hey, I am Abhishek</h5>
        <h3>
          I'm a <span>MERN Stack Developer</span>
        </h3>
        <p>
          I'm currently looking for a new job role in the Software Industry,
          leveraging my expertise in web development and proficiency in the MERN
          Stack., I'm ideally seeking a new position as a{" "}
          <span>Frontend Developer</span>
        </p>
        <button>
          <a href="images/Abhishek-CV.pdf">Download CV</a>
        </button>
      </div>
      <div className="right">
        <img src="images/header.png" />
      </div>
    </div>
  );
}

export default main;
