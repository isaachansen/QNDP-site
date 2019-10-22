import React, { Component } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Companies />
        <Contact />
      </div>
    );
  }
}

export default App;
