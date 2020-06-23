import React from "react";
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

function App() {
  const location = useLocation();

  const isHome = location.pathname === "/" ? true : false;

  return (
    <div className="app">
      {isHome && (
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              color: {
                value: "random",
              },
              size: {
                value: 3,
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
                speed: 2,
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
        <Route component={ErrorPage}></Route>
      </Switch>
      {!isHome && <Footer></Footer>}
    </div>
  );
}

export default App;
