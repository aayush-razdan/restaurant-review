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
//import { getCities } from "../actions/cityActions";
import { getBlogs } from "../actions/blogActions";

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

const Blog = (props) => {
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
          <h4>{props.blog.title}</h4>
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
          {props.blog.body}
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
class BlogList extends Component {
  // constructor(props) {
  //   super(props);
  // this.onChangeCity = this.onChangeCity.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);
  //this.restaurantList = this.restaurantList.bind(this);

  //   this.state = {
  //     localcity: "All",
  //     //cities1: [],
  //     restaurants: [],
  //     restaurants1: [],
  //   };
  // }

  static propTypes = {
    getBlogs: PropTypes.func.isRequired,
    //getCities: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired,
    //city: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getBlogs();
    //this.props.getRestaurants();

    //this.setState({ blogs: this.props.blog.blogs });
  }

  // onChangeCity(e) {
  //   this.setState({
  //     localcity: e.target.value,
  //   });
  // }

  blogList() {
    return this.props.blog.blogs.map((currentblog) => {
      return <Blog blog={currentblog} key={currentblog._id} />;
    });
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   const selcity = this.state.localcity;

  //   if (selcity == "All") {
  //     this.setState({ restaurants: this.props.restaurant.restaurants });
  //   } else {
  //     this.setState({
  //       restaurants: this.props.restaurant.restaurants.filter(
  //         (rt) => rt.city === selcity
  //       ),
  //     });
  //   }
  // }

  // onDeleteClick = (id) => {
  //   this.props.deleteItem(id);
  // };
  render() {
    //const { restaurants } = this.props.restaurant;
    // this.setState({ restaurants: this.props.restaurant.restaurants });

    return (
      <div>
        {/* <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>City: </label>

            <select
              //ref="userInput"
              required
              className="form-control"
              value={this.state.localcity}
              onChange={this.onChangeCity}
            >
              <option key={0} value={"All"}>
                All
              </option>
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
        </form> */}
        <div className="row text-center" id="thumbdiv">
          {this.blogList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blog,
  // isAuthenticated: state.auth.isAuthenticated,
  //city: state.city,
});

export default connect(mapStateToProps, {
  getBlogs,
  //getCities
})(BlogList);
