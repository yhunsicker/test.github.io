import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function MobileNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const onClick = useCallback(
    (e) => {
      if (node && node.current && node.current.contains(e.target)) {
        return setIsOpen(!isOpen);
      }

      return setIsOpen(false);
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, [onClick]);

  return (
    <div ref={node}>
      {isOpen ? (
        <div className="mobile-nav-open">
          <div onClick={onClick} className="mobile-nav-x">
            X
          </div>
          <Link to="/about" onClick={onClick} className="mobile-nav-item">
            About
          </Link>
          <Link to="/Portfolio" onClick={onClick} className="mobile-nav-item">
            Portfolio
          </Link>
          <Link to="/resume" onClick={onClick} className="mobile-nav-item">
            Resume
          </Link>
        </div>
      ) : (
        <div className="mobile-nav-closed" onClick={onClick}>
          Menu
        </div>
      )}
    </div>
  );
}

export default MobileNav;
