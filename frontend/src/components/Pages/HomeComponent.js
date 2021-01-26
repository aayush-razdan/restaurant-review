import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import './styles.css';

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

            <Link to="/CreateRestaurant">
            <Button variant="contained" color="primary" size="14%">
Add Restaurant
</Button>
             
            </Link>
          </p>
        </div>
        
      </header>
      
    );
  }
}
