import React from "react";
import "./about.css";
import ContactBox from "./ContactBox";
import yuliAbout from "./yuli-about.jpg";
import ovalIcon from "./oval.png";
import travelIcon from "./travel.jpg";
import amsterdamIcon from "./amsterdam.jpg";
import gaIcon from "./ga.jpg";

function About(props) {
  return (
    <div className="about">
      <div className="about-title">About Me</div>
      <div className="about-header-sentence">
        The journey to my becoming an UX Designer was definitely the road less
        traveled and I loved every moment of it.
      </div>
      <img className="about-image-yuli" src={yuliAbout} alt="yuli-about"></img>
      <div className="about-container-one">
        <div className="line-container">
          <img className="oval-icon" src={ovalIcon} alt="oval-icon"></img>
          <div className="line-one"></div>
        </div>
        <div>
          <div className="about-content-title">Interesting Fact</div>
          <div className="about-content-message">I grew up with a monkey.</div>
        </div>
      </div>
      <div className="about-container-one">
        <div className="line-container">
          <img className="travel-icon" src={travelIcon} alt="travel-icon"></img>
          <div className="line-two"></div>
        </div>
        <div>
          <div className="about-content-title-red">Human Rights</div>

          <div className="about-content-title">Child Protection Specialist</div>
          <div className="about-content-message">
            Working as a Child Protection and Gender Specialist allowed me the
            opportunity to travel and work for a range of organizations
            including UNICEF Cambodia, local ngos, and schools. Throughout the
            years, I realized that technology (especially phones) played a huge
            role in bringing opportunies to marginalized and at-risk groups. I
            became interested in finding alternative avenues to support,
            advocate, and provide tools to bridge the gap for access to human
            rights needs including but limited to: education, health, food,
            shelter, and much more. Thus, my interest to coding began.
          </div>
        </div>
      </div>
      <div className="about-container-one">
        <div className="line-container">
          <img
            className="travel-icon"
            src={amsterdamIcon}
            alt="amsterdam-icon"
          ></img>
          <div className="line-three"></div>
        </div>
        <div>
          <div className="about-content-title-red">Full-Stack Development</div>

          <div className="about-content-title">Decided to Code</div>
          <div className="about-content-message">
            My budding interest in using technology for social change led me to
            join Le Wagon, a full-stack development program, in Amsterdam,
            Netherlands. I dicovered I loved debugging front-end code, but I was
            missing something and couldn’t quite figure it out. It wasn’t until
            I attended a mandatory UX/UI lunch-&-learn that I realized what I
            was missing. I missed working with an diverse team, collecting data
            through interviews, and coming up with solutions to issues
            discovered through research. That’s when I knew I wanted to purse
            UX/UI Design: a perfect balance of human interaction, front-end
            coding, and problem solving.
          </div>
        </div>
      </div>
      <div className="about-container-one">
        <div className="line-container">
          <img className="ga-icon" src={gaIcon} alt="ga-icon"></img>
          <div className="line-four"></div>
        </div>
        <div>
          <div className="about-content-title-red">UX Design</div>

          <div className="about-content-title">
            Became an User Experience Designer
          </div>
          <div className="about-content-message">
            I very much have an interdisciplinary approach to user experience
            design: my education in peace studies (with a focus in human rights)
            and communications informs my approach to human-centered design;
            earlier professional experience futher underscore my aptitude for
            crafting digital experiences to solving issues confronting humanity
            for a wide range of audiences and users.
          </div>
        </div>
      </div>
      <ContactBox></ContactBox>
    </div>
  );
}

export default About;
