import React, { Component } from "react";
import QNDPlogo from "../../Images/QNDPLOGO.png";
import "./Home.css";
import { Link } from "react-scroll";

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="background-3">
        <div className="logo-b">
          {/* <h1 className="logo">QNDP</h1> */}
          <img className="qndplogo" src={QNDPlogo} alt="qndplogo" />
        </div>
        <div className="btn">
          <Link className="btn1" duration= {700} smooth={true} to="home"></Link>
          <Link className="btn2" duration= {700} smooth={true} to="about"></Link>
          <Link className="btn3" duration= {700} smooth={true} to="companies"></Link>
          <Link className="btn4" duration= {700} smooth={true} to="contact"></Link>
        </div>
      </div>
    );
  }
}
