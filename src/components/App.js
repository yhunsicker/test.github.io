import React, { useEffect, useState } from "react";
import "../css/app.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Header from "./Header";
import About from "./About";
import ErrorPage from "./Error";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Particles } from "react-particles-js";

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

function App() {
  const location = useLocation();

  const isHome = location.pathname === "/" ? true : false;

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

  return (
    <div className="app">
      {isHome && (
        <Particles
          params={{
            particles: {
              number: {
                value: isPhoneWidth ? 50 : 160,
                density: {
                  enable: false,
                },
              },
              color: {
                value: "random",
              },
              // opacity: {
              //   value: 1,
              //   random: false,
              //   anim: {
              //     enable: false,
              //     speed: 2,
              //     opacity_min: 0,
              //     sync: false,
              //   },
              // },
              size: {
                value: 4,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                // direction: "top",
                out_mode: "out",
              },
            },
            // interactivity: {
            //   events: {
            //     onhover: {
            //       enable: true,
            //       mode: "bubble",
            //     },
            //     onclick: {
            //       enable: true,
            //       mode: "repulse",
            //     },
            //   },
            //   modes: {
            //     bubble: {
            //       distance: 250,
            //       duration: 2,
            //       size: 0,
            //       opacity: 0,
            //     },
            //     repulse: {
            //       distance: 400,
            //       duration: 4,
            //     },
            //   },
            // },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            background: "white",
          }}
        />
      )}

      <Header />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route component={Home}></Route>
      </Switch>
      {!isHome && <Footer></Footer>}
    </div>
  );
}

export default App;
