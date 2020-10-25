import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantList from "./restaurant-list.component"
import CreateUser from "./create-user.component"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          QL
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/RestaurantList" className="nav-link">
                Restaurants near you
              </Link>
              <Route path="/RestaurantList" component={RestaurantList} />
            </li>
            <li className="navbar-item">
              <Link to="/CreateReview" className="nav-link">
                Create Review
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/CreateUser" className="nav-link">
                Login
              </Link>
              <Route path="/CreateUser" component={CreateUser} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
