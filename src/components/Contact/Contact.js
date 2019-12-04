import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="background-2">
        <div>
          <h2 className="cont-text">CONTACT</h2>
        </div>
        <div className="form-area">
        <form className="form">
          <input className="name" placeholder="NAME" />
          <input className="email" placeholder="EMAIL" />
          <textarea rows="5" cols="25" className="message" placeholder="MESSAGE" />
          <button type="submit" className="sub-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}
