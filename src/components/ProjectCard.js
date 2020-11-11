import React from "react";
import "../css/projectcard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="project-image" src={props.image} alt={props.label}></img>
      <div className="project-label">{props.label}</div>
      <div className="project-description">{props.description}</div>
      <a
        href={props.url || "mailto:yhunsicker@gmail.com"}
        target={props.url ? "_blank" : "_self"}
        className="project-link"
      >
        {props.contact ? "contact me" : "check it out"}
      </a>
      
    </div>
  );
}

export default ProjectCard;
