import React from "react";
import "./Services.css";

function Skils() {
  return (
    <div>
      <div className="services" id="service">
        <h5>My Services</h5>
        <h3>My Expertise</h3>
        <div className="services-items">
          <div className="item">
            <div className="icon">
              <i class="bx bx-devices"></i>
            </div>
            <h4>Responsive Web Design</h4>
            <p>
              Creating layouts that adapt to different screen sizes and devices
              to provide a consistent user experience across desktops, tablets,
              and smartphones.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-bookmark-heart"></i>
            </div>
            <h4>JavaScript Development</h4>
            <p>
              Writing and implementing JavaScript code to make websites
              interactive and dynamic.Utilizing JavaScript frameworks and
              libraries (e.g., React) for efficient development.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i class="bx bxl-sketch"></i>
            </div>
            <h4>UI & UX Design</h4>
            <p>
              Implementing the visual design of the website, including elements
              like buttons, forms, navigation menus, and other UI components.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-code-alt"></i>
            </div>
            <h4>MERN Stack</h4>
            <p>
              Develop interactive and dynamic web applications using the MERN
              (MongoDB, Express.js, React, Node.js) stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
