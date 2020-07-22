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
        title="About Page of Yhunsicker"
      >
        About
      </NavLink>
      <NavLink to="/portfolio" className="link" activeClassName="active-link">
        Portfolio
      </NavLink>
      <a
        target="_blank"
        href={resume}
        rel="noopener noreferrer"
        className="link"
      >
        Resume
      </a>
    </div>
  );
}

export default Nav;
