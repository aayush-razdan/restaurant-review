import React from "react";
import ReactDOM from "react-dom";
import Home from "./src/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateRestaurant from "./src/Home/createRestaurant";
import RestaurantList from "./src/Home/RestaurantList";

function App() {
  return (
    <Router>
      {/* <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div> */}
      <Route path="/" exact component={Home} />
      <Route path="/CreateRestaurant" component={CreateRestaurant} />
      <Route path="/RestaurantList" component={RestaurantList} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
