import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="background-2">
          <h2 className="cont-text">CONTACT</h2>
           <div className="form-area">
          <input className="name" placeholder="NAME" />
          <input className="email" placeholder="EMAIL" />
          <textarea rows="5" cols="25" className="message" placeholder="MESSAGE" />
          </div>
      </div>
    );
  }
}
