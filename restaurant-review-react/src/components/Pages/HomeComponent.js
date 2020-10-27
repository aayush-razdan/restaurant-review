import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <header className="jumbotron">
        <div className="container">
          <h1>
            <span className="glyphicon glyphicon-tent"></span> Welcome To Review
          </h1>
          <p>By Quarantine Lovers</p>
          <p>
            <Link to="/CreateReview" className="btn btn-primary btn-md">
              Add Review
            </Link>
          </p>
        </div>
      </header>
    );
  }
}
