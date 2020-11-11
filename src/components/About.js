import React, { useState, useEffect } from "react";
import "../css/about.css";
// import ContactBox from "./ContactBox";
import yuliAbout from "../images/yuli-about.jpg";
import ovalIcon from "../images/oval.png";
import travelIcon from "../images/travel.jpg";
import amsterdamIcon from "../images/amsterdam.jpg";
import gaIcon from "../images/ga.jpg";

// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

function debounce(fn, ms) {
  let timer;

  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function About(props) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const isPhoneWidth = dimensions.width < 650;

  const pickClassName = (x, y) => (isPhoneWidth ? x : y);

  return (
    <div className="about">
      <div className="about-title">About me</div>
      <div className="about-header-sentence">
      The journey to my becoming a UX Designer was the road 
      less traveled, and I loved every moment of it.
      </div>
      <img
        className={pickClassName("about-image-yuli", "dont-display")}
        src={yuliAbout}
        alt="yuli with blonde hair peeping out"
      ></img>
      <div className="about-sidebar-container">
        <div>
          <div className={pickClassName("dont-display", "about-sidebar")}>
            <img
              className={pickClassName("dont-display", "about-image-yuli")}
              src={yuliAbout}
              alt="yuli-about"
            ></img>
            <div className="about-content-title-red human-rights">
              Human Rights
            </div>
            <div className="about-content-title-red full-stack">
              Full-Stack Development
            </div>
            <div className="about-content-title-red ux-design">UX Design</div>
          </div>
        </div>
        <div>
          <div className="about-container-one">
            <div className="line-container">
              <img className="oval-icon" src={ovalIcon} alt="oval-icon"></img>
              <div className="line-one"></div>
            </div>
            <div>
              <div className="about-content-title">Interesting Fact</div>
              <div className="about-content-message">
                I've been to 49 States.
              </div>
            </div>
          </div>
          <div className="about-container-one">
            <div className="line-container">
              <img
                className="travel-icon"
                src={travelIcon}
                alt="travel-icon"
              ></img>
              <div className="line-two"></div>
            </div>
            <div>
              <div
                className={pickClassName(
                  "about-content-title-red",
                  "dont-display"
                )}
              >
                Human Rights
              </div>

              <div className="about-content-title">
                Child Protection Specialist
              </div>
              <div className="about-content-message">
              Working as a Child Protection and Gender Specialist allowed me to travel and 
              work for a range of organizations, including UNICEF Cambodia, local NGOs, and 
              schools. I realized that technology (especially phones) played a massive role in 
              bringing opportunities to marginalized and at-risk groups throughout the years. 
              I became interested in finding alternative avenues to support, advocate, and provide 
              tools to bridge the gap for access to human rights needs, including education, 
              health, food, shelter, and much more. Thus, my interest in coding began.
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
              <div
                className={pickClassName(
                  "about-content-title-red",
                  "dont-display"
                )}
              >
                Full Stack Development
              </div>

              <div className="about-content-title">Decided to Code</div>
              <div className="about-content-message">
              My budding interest in using technology for social change led me to join a 
              full-stack development program where I discovered I loved debugging front-end 
              code, but I was missing something and couldn’t quite figure it out. It wasn’t 
              until I attended a UX/UI lunch-&-learn that I realized what I was missing. 
              I missed collecting data through interviews and coming up with solutions to issues 
              discovered through research but wanted to keep the creative aspect of front-end 
              development. That’s when I knew I wanted to pursue UX/UI Design: a perfect balance of 
              human interaction, front-end coding, and problem-solving.
              </div>
            </div>
          </div>
          <div className="about-container-one">
            <div className="line-container">
              <img className="ga-icon" src={gaIcon} alt="ga-icon"></img>
              <div className="line-four"></div>
            </div>
            <div>
              <div
                className={pickClassName(
                  "about-content-title-red",
                  "dont-display"
                )}
              >
                UX Design
              </div>

              <div className="about-content-title">
                Became a User Experience Designer
              </div>
              <div className="about-content-message">
              I have an interdisciplinary approach to user experience design: my education in 
              peace studies (focusing on human rights) and communications informs my practice to 
              human-centered design. Earlier professional experiences further underscore my 
              aptitude for crafting digital experiences to solve issues confronting humanity for 
              many audiences and users.
              </div>
              <br />
              <div className="about-content-message">
              Every day I am guided by this Sasha Costanza-Chock quote, "The most valuable 'ingredient' in design justice is the full inclusion of people with direct lived experience of the conditions the design team is trying to change."
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactBox></ContactBox> */}
    </div>
  );
}

export default About;
