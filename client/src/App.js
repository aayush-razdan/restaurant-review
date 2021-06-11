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
import BlogCombine from "./components/BlogCombine";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemCombine from "./components/ItemCombine";
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
            <AppNavbar />
            <Route path="/ShoppingList" component={ItemCombine} />
            <Route path="/ViewRestaurants" component={RestaurantList} />
            <Route path="/ViewBlogs" component={BlogCombine} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
