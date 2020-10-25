import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import RestaurantList from "./components/restaurantList.component";

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
            <Link to="/RestaurantList" className="btn btn-primary btn-md">
              Add New Restaurant
            </Link>
            <Route path="/RestaurantList" component={RestaurantList} exact />
          </p>
        </div>
      </header>
    </Router>
  );
}

export default App;
