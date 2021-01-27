import React, { ReactDOM, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../stylesheets/RestaurantList.css";
// import { Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    width: 200
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
          <h4>{props.restaurant.resname}</h4>
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
          <CardMedia
            className={classes.media}
            image=""
            title="Restaurant"
          />
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
