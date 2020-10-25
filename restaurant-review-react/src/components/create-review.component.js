import React, { ReactDOM, Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default class CreateReview extends Component {
  render() {
    return (
      //<Router>
      <nav className="navbar navbar bg-dark navbar-expand-lg">
        <form>
          <p>
            <b>Name of the restaurnant: </b>
            <input type="text"></input>
          </p>
          <p>{"\n"}</p>
          <p>
            <b>Dish you had was: </b>
            <input type="text"></input>
          </p>
          <p>{"\n"}</p>
          <p>
            <b>Rate 1-5: </b>
            <input type="text"></input>
          </p>
        </form>
      </nav>
      // </Router>
    );
  }
}
