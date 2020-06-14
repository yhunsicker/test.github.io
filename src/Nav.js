import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import resume from "./yhunsicker-resume.pdf";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/portfolio" className="link">
        Portfolio
      </Link>
      <a target="_blank" href={resume} rel="noopener noreferrer">
        Resume
      </a>
    </div>
  );
}

export default Nav;
