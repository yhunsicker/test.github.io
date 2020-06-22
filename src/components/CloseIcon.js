import React from "react";

function CloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeLinecap="round"
        strokeWidth="2"
        opacity=".7"
      >
        <path
          d="M.475.475L18.525 18.525M18.525.475L.475 18.525"
          transform="translate(1 1)"
        />
      </g>
    </svg>
  );
}

export default CloseIcon;
