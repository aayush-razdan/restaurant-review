import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import CreateReview from "./components/create-review.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/CreateReview" component={CreateReview} />
    </Router>
  );
}

export default App;
