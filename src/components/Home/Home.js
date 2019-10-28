import React, { Component } from "react";
import QNDPlogo from "../../Images/QNDPLOGO.png"
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="background-3">
        <div className="logo-b">
          {/* <h1 className="logo">QNDP</h1> */}
          <img className="qndplogo" src={QNDPlogo} alt="qndplogo" />
        </div>
        <div className="btn">
        <a href="/" className="btn1"><h3>hi</h3></a>
        <a href="/" className="btn2"><h3>hi</h3></a>
        <a href="/" className="btn3"><h3>hi</h3></a>
        <a href="/" className="btn4"><h3>hi</h3></a>
        </div>
      </div>
    );
  }
}
