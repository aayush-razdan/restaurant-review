import React, { ReactDOM, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Home/static/RestaurantList.css";

const Restaurant = (props) => {
  return (
    <div class="col-md-3 col-sm-6">
      <div className="thumbnail">
        <img src="" />
        <div className="caption">
          <h4>{props.restaurant.resname}</h4>
        </div>
        <p>
          <Link
            to={"/view/" + props.restaurant._id}
            className="btn btn-primary"
          >
            More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      city: "",
      cities: [],
      restaurants: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/cities/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            cities: response.data.map((city) => city.city),
            city: response.data[0].city,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/restaurants/")
      .then((response) => {
        this.setState({ restaurants: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  restaurantList() {
    return this.state.restaurants.map((currentrestaurant) => {
      return (
        <Restaurant
          restaurant={currentrestaurant}
          key={currentrestaurant._id}
        />
      );
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const selcity = this.state.city;

    this.setState({
      restaurants: this.state.restaurants.filter((rt) => rt.city == selcity),
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>City: </label>
            <select
              //ref="userInput"
              required
              className="form-control"
              value={this.state.city}
              onChange={this.onChangeCity}
            >
              {this.state.cities.map(function (city) {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <div className="row text-center" id="thumbdiv">
          {this.restaurantList()}
        </div>
      </div>
    );
  }
}
