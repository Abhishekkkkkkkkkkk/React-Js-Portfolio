import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={menuOpen ? "open" : ""}>
        <div>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/abhishek-kumar-a77600221/"
            target="_blank"
          >
            Abhishek
          </a>
        </div>
        <ul>
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#Certificate">Certificates</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="https://github.com/Abhishekkkkkkkkkkk">
          <button>My Github</button>
        </a>
        <button className="btn" id="menuButton" onClick={toggleMenu}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
