import React from "react";
import instagramLogo from "./instagram.png";
import emailLogo from "./email.png";
import linkedinLogo from "./linkedin.png";

function ContactBox(props) {
  return (
    <div className="contact-box-container">
      <div className="contact-box">
        <div className="contact-box-title">Let's Get in Touch!</div>
        <div className="contact-box-message">
          I’m always inspired to learn & share knowledge. Feel free to connect
          with me with opportunities or just to say hi!
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/yu-li-hunsicker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="linkedin.png"></img>
          </a>
          <a href="mailto:yhunsicker@gmail.com">
            <img src={emailLogo} alt="email.png"></img>
          </a>
          <a
            href="https://www.instagram.com/ashortyabroad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="instagram.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
