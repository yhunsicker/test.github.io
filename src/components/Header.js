import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Title from "./Title";
import MobileNav from "./MobileNav";
import "../css/header.css";

function Header(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="header">
      <Title></Title>
      {isDesktop ? <Nav></Nav> : <MobileNav></MobileNav>}
    </div>
  );
}

export default Header;
