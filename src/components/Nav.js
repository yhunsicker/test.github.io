import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import resume from "../yhunsicker-resume.pdf";

function Nav(props) {
  return (
    <div className="nav">
      <NavLink
        to="/about"
        className="link"
        activeClassName="active-link"
        title="About Yhunsicker"
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className="link"
        activeClassName="active-link"
        title="View Yhunsicker's Work Portfolio"
      >
        Portfolio
      </NavLink>
      <a
        target="_blank"
        href={resume}
        rel="noopener noreferrer"
        className="link"
        title="View or Download Yhunsicker's Resume"
      >
        Resume
      </a>
    </div>
  );
}

export default Nav;
