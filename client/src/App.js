import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ItemModal from "./components/ItemModal";
import ShoppingList from "./components/ShoppingList";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { Component } from "react";
import RestaurantList from "./components/RestaurantList";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            {/* <Navbar />
            <Route path="/" exact component={Home} /> */}
            {/* <Route path="/CreateRestaurant" component={CreateRestaurant} />
            <Route path="/RestaurantList" component={RestaurantList} />
            <Route path="/CreateUser" component={CreateUser} /> */}
            <Route path="/ViewRestaurants" component={RestaurantList} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
