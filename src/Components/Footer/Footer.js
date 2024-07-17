import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="top">
          <div>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/abhishek-kumar-a77600221/"
            >
              Abhishek
            </a>
          </div>
          <ul>
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#about">Skills</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#Certificate">Certificates</a>
            </li>
          </ul>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abhishek-kumar-a77600221/">
              <img src="images/linkdinlogo.png" />
            </a>
            <a href="https://github.com/Abhishekkkkkkkkkkk">
              <img src="images/githublogo.png" />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/krabhishek0321">
              <img src="images/gfglogo.png" />
            </a>
            <a href="https://leetcode.com/Abhi_1_2_3/">
              <img src="images/leetcodelogo.png" />
            </a>
            <a href="https://www.codechef.com/users/abhitherock123">
              <img src="images/codescheflogo.ico" />
            </a>
            <a href="https://www.hackerrank.com/profile/krabhishek0321">
              <img src="images/hranklogo.png" />
            </a>
          </div>
        </div>
        <div className="separator"></div>
        <div className="bottom">
          <p>Copyright@Abhishek-2k24</p>
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies Setting</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
