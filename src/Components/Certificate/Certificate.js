import React from "react";
import "./Certificate.css";

function Certificate() {
  return (
    <div>
      <div className="certificate" id="Certificate">
        <h5>Certificate</h5>
        <h3>My Certificates</h3>
        <div className="certificate-list">
          <div className="item">
            <img src="images/certificate-1.png"></img>
          </div>
          <div className="item">
            <img src="images/certificate-2.png"></img>
          </div>
          <div className="item">
            <img src="images/certificate-3.png"></img>
          </div>
          <div className="item">
            <img src="images/certificate-4.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
