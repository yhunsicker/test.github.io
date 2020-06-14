import React from "react";
import logo from "./yuli-home.png";
import "./home.css";
import Button from "./Button";

function Home(props) {
  return (
    <div className="home-container">
      <img src={logo} className="logo-home" alt="home-logo.png"></img>
      <div>
        <div className="home-title">
          <div>Hi, I’m Yu-Li Hunsicker</div>
          <div>I design, travel, & pet dogs.</div>
        </div>
        <div className="home-content">
          I produce elegant solutions with a human-centered design approach to
          help organizations/companies Transcend International Boundaries
          through accessible and impactful UX/UI Designs.
        </div>
        <Button className="button"></Button>
      </div>
    </div>
  );
}

export default Home;
