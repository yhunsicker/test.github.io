import React from "react";
import "./about.css";
import ContactBox from "./ContactBox";

function About(props) {
  return (
    <div className="about">
      <div className="about-title">About Me</div>
      <div className="about-header-sentence">
        The journey to my becoming an UX Designer was definitely the road less
        traveled and I loved every moment of it.
      </div>
      <ContactBox></ContactBox>
    </div>
  );
}

export default About;
