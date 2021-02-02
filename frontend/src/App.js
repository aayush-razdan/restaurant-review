import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/nav";
//import Navbar from "./components/NavBar";
import Home from "./components/Pages/HomeComponent";
import CreateRestaurant from "./components/Pages/createRestaurant";
import RestaurantList from "./components/Pages/RestaurantList";
import CreateUser from "./components/Pages/CreateUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/CreateRestaurant" component={CreateRestaurant} />
      <Route path="/RestaurantList" component={RestaurantList} />
      <Route path="/CreateUser" component={CreateUser} />
    </Router>
  );
}

export default App;
