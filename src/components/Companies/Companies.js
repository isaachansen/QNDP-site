import React, { Component } from "react";
import wndr from "../../Images/logo_coloredFT.png";
import nevernot from "../../Images/logo.png";
import "./Companies.css";

export default class Companies extends Component {
  render() {
    return (
      <div id="companies" className="background-1">
        <div>
          <h2 className="comp-title">COMPANIES</h2>
        </div>
        <div className="logos">
          <img className="wndr-logo" src={wndr} alt="img" /> 
          <img className="nn-logo" src={nevernot} alt="img" />
        </div>
      </div>
    );
  }
}
