import React, { ReactDOM, Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default class CreateUser extends Component {
  render() {
    return (
      //<Router>
      <nav className="navbar navbar bg-dark navbar-expand-lg">
        <form>
          <p>
            <b>Your name: </b>
            <input type="text"></input>
          </p>
          <p>{"\n"}</p>
          <p>
            <b>Username: </b>
            <input type="text"></input>
          </p>
          <p>{"\n"}</p>
          <p>
            <b>Email id: </b>
            <input type="text"></input>
          </p>
        </form>
      </nav>
      // </Router>
    );
  }
}
