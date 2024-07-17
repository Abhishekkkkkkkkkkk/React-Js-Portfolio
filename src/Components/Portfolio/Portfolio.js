import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="portfolio" id="portfolio">
        <div className="header">
          <div className="info">
            <h5>Recent Projects</h5>
            <h3>My Project</h3>
          </div>
          <button>
            <a href="https://app.netlify.com/teams/krabhishek0321/overview">
              All Projects
            </a>
          </button>
        </div>

        <div className="portfo-items">
          <div className="item">
            <img src="images/work-1.PNG" />
            <div className="info">
              <h4>Netflix Clone</h4>
              <p>
                This is a Netflix Clone which is Created using the combination
                of HTML, CSS, and JavaScript.
              </p>
              <a href="https://netflix-clone124.netlify.app/">
                Live Preview <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="item">
            <img src="images/work-2.PNG" />
            <div className="info">
              <h4>SK-IT Solution</h4>
              <p>
                A leading IT solutions website clone which is Created using the
                combination of HTML, CSS, and JavaScript.
              </p>
              <a href="https://sk-it-solution.netlify.app/">
                Live Preview <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="item">
            <img src="images/work-3.PNG" />
            <div className="info">
              <h4>My Portfolio</h4>
              <p>
                This is my another portfolio website which is Created using the
                combination of HTML, CSS, and JavaScript.
              </p>
              <a href="https://abhshek2k24.netlify.app/">
                Live Preview <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
