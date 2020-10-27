import React, { ReactDOM, Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default class CreateReview extends Component {
  constructor(props) {
    super(props);

    this.onChangeResname = this.onChangeResname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    //this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      resname: "",
      description: "",
      city: "",
      address: "",

      //duration: 0,
      //date: new Date(),
      cities: [],
    };
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //         username: response.data[0].username
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    this.setState({
      cities: ["Delhi", "Mumbai"],
      city: "Delhi",
    });
  }

  onChangeResname(e) {
    this.setState({
      resname: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  //   onChangeDuration(e) {
  //     this.setState({
  //       duration: e.target.value
  //     })
  //   }

  //   onChangeDate(date) {
  //     this.setState({
  //       date: date
  //     })
  //   }

  onSubmit(e) {
    e.preventDefault();

    const restaurant = {
      resname: this.state.resname,
      description: this.state.description,
      address: this.state.address,
      city: this.state.city,
    };

    console.log(restaurant);

    // axios.post('http://localhost:5000/exercises/add', exercise)
    //   .then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Restaurant</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Restaurant Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.resname}
              onChange={this.onChangeResname}
            />
          </div>
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
            <label>Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Restaurant"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
