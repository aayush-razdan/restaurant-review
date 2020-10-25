import React, { ReactDOM, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default class RestaurantList extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar bg-dark navbar-expand-lg">
                    <form>
                        <p>Name of the restaurnant: </p>
                        <input type="text"></input>
                        <p>Dish you had was: </p>
                        <input type="text"></input>
                        <p>Rate 1-5: </p>
                        <input type="text"></input>
                    </form>
                </nav>
            </Router>
        );
    }
}
