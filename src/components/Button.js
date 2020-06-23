import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to="/portfolio" className={props.className}>
      Portfolio
    </Link>
  );
}

export default Button;
