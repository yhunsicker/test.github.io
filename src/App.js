import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Header from "./Header";
import About from "./About";
import ErrorPage from "./Error";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
