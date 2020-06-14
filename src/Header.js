import React from "react";
import Nav from "./Nav";
import Title from "./Title";
import MobileNav from "./MobileNav";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <Title></Title>
      <Nav></Nav>
      <MobileNav></MobileNav>
    </div>
  );
}

export default Header;
