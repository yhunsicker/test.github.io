import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to="/portfolio">
      <div className={props.className}>Portfolio</div>
    </Link>
  );
}

export default Button;
