import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CreateReview from "./components/create-review.component";

function App() {
  return (
    <Router>
      <Navbar />
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
            <Route path="/CreateReview" component={CreateReview} exact />
          </p>
        </div>
      </header>
    </Router>
  );
}

export default App;
