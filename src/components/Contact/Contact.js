import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="background-2">
        <div className="box-text">
          <h2 className="cont-text">CONTACT</h2>
        </div>
        <div className="input-holder">
          <input placeholder="NAME" />
          <input placeholder="EMAIL" />
          <input placeholder="MESSAGE" />
        </div>
      </div>
    );
  }
}
