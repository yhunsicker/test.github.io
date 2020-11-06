import React from "react";
import instagramLogo from "../images/instagram.png";
import emailLogo from "../images/email.png";
import linkedinLogo from "../images/linkedin.png";

// css in about.css

// css in about.css

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
          <div className="SocialMediaOne">
          <a
            href="https://www.linkedin.com/in/yu-li-hunsicker/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <img
              src={linkedinLogo}
              alt="linkedin.png"
              className="linkedin-icon contact-link"
              id="linkedin"
            >
            </img>
            </a>
            <p id="connect">Connect with me on LinkedIn.</p>
          </div>

        <div className="SocialMediaTwo">
          <a
            href="https://www.instagram.com/ashortyabroad/"
            target="_blank"
            rel="noopener noreferrer"
          >

          <img
              src={instagramLogo}
              alt="instagram.png"
              className="instagram-icon contact-link"
              id="instagram"
            >
          </img>
          </a>
          <p id="connect">View my adventures on Instagram.</p>
        </div>

        <div className="contact-box-message" id="second-paragraph">
          Are you thinking about switching careers and becoming a user experience 
          designer? I would love to share my journey from a child protection specialist
          to a human-centered designer. 
        </div>

        <div className="SocialMediaThree">

          <a href="https://calendly.com/yhunsicker/30min?back=1&month=2020-11">
            <img
              src={emailLogo}
              alt="email.png"
              className="email-icon contact-link"
              id="email"
            ></img>
          </a>
          <p id="connect">Schedule a meeting to set up a chat.</p>
          {/* <div class="calendly-inline-widget" data-url="https://calendly.com/yhunsicker" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
