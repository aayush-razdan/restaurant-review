import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD:restaurant-review-react/src/components/Pages/NavBarOther.js
import RestaurantList from "./RestaurantList"
import CreateUser from "./CreateUser"
=======
import RestaurantList from "./restaurant-list.component";
import CreateUser from "./create-user.component";
>>>>>>> 08afbf0bc004ffd105d465597f6cdd18a526e26d:restaurant-review-react/src/components/navbar.component.js

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
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
/*
import React,{useState} from 'react'

export default function navbarcomponent() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        
        </div>
      </nav>
    </>
  )
}
*/