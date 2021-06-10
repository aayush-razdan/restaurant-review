import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red, blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "../stylesheets/RestaurantList.css";
import { getCities } from "../actions/cityActions";
import { getRestaurants } from "../actions/restaurantActions";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    width: 200,
    backgroundColor: blue[100],
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Restaurant = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div class="col-md-3 col-sm-6">
      <div className="thumbnail">
        <img src="" />
        <div className="caption">
          <h4>{props.restaurant.name}</h4>
        </div>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardMedia className={classes.media} image="" title="Restaurant" />
          {/* <Link
            to={"/view/" + props.restaurant._id}
            className="btn btn-primary"
          > */}
          {props.restaurant.description}
          {/* </Link> */}
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.restaurantList = this.restaurantList.bind(this);

    this.state = {
      localcity: "Delhi",
      //cities1: [],
      restaurants: [],
      restaurants1: [],
    };
  }

  static propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    getCities: PropTypes.func.isRequired,
    restaurant: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getCities();
    this.props.getRestaurants();

    this.setState({ restaurants: this.props.restaurant.restaurants });
    //this.setState({ restaurants1: this.props.restaurant.restaurants });
    //this.setState({ cities1: this.props.city.cities });
    //this.setState({ localcity: this.props.city.cities[0].name });
  }
  onChangeCity(e) {
    this.setState({
      localcity: e.target.value,
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
    const selcity = this.state.localcity;

    this.setState({
      restaurants: this.props.restaurant.restaurants.filter(
        (rt) => rt.city === selcity
      ),
    });
  }

  // onDeleteClick = (id) => {
  //   this.props.deleteItem(id);
  // };
  render() {
    //const { restaurants } = this.props.restaurant;
    this.setState({ restaurants: this.props.restaurant.restaurants });

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>City: </label>
            <select
              //ref="userInput"
              required
              className="form-control"
              value={this.state.localcity}
              onChange={this.onChangeCity}
            >
              {this.props.city.cities.map(({ _id, name }) => {
                return (
                  <option key={_id} value={name}>
                    {name}
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

const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
  // isAuthenticated: state.auth.isAuthenticated,
  city: state.city,
});

export default connect(mapStateToProps, { getRestaurants, getCities })(
  RestaurantList
);
