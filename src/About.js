import React from "react";
import "./about.css";

function About(props) {
  return (
    <div className="about">
      <div className="about-title">About Me</div>
      <div className="about-header-sentence">
        The journey to my becoming an UX Designer was definitely the road less
        traveled and I loved every moment of it.
      </div>
      {/* <div className="contact-box-container">
        <div className="contact-box">
          <div className="contact-box-title">Let's Get in Touch!</div>
          <div className="contact-box-message">
            I’m always inspired to learn & share knowledge. Feel free to connect
            with me with opportunities or just to say hi!
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
