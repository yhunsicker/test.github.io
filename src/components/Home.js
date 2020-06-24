import React, { useEffect } from "react";
import logo from "../images/yuli-home.jpg";
import "../css/home.css";
import Button from "./Button";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();

  useEffect(() => {
    console.log("route has been changed", history);
    history.push("/");
  }, [history.location.pathname]);

  return (
    <div className="home-container">
      <img src={logo} className="logo-home" alt="home-logo.png"></img>
      <div>
        <div className="home-title">
          <div>Hi, I’m Yu-Li Hunsicker!</div>
          <div>I design, travel, & pet dogs.</div>
        </div>
        <div className="home-content">
          I produce elegant solutions with a human-centered design approach to
          help organizations/companies transcend international boundaries
          through accessible and impactful UX/UI Designs.
        </div>
        <Button className="button"></Button>
      </div>
    </div>
  );
}

export default Home;
