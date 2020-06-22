import React from "react";
import { Link } from "react-router-dom";
import "../css/error.css";

function Error(props) {
  return (
    <div className="error">
      Looks like something went wrong! Click <Link to="/">here</Link> to go
      home.
    </div>
  );
}

export default Error;
