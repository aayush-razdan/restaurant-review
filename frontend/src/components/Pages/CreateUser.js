import React, { ReactDOM, Component, Text } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Icon, Image } from "semantic-ui-react";

export default class CreateUser extends Component {
  render() {
    return (
      // <Router>
      // <nav className="navbar navbar bg-dark navbar-expand-lg">
      <Card>
        <form>
          <p>
            <b>Your name: </b>
            <input type="text"></input>
          </p>
          <p>{"\n"}</p>
          <p>
            <b>Username: </b>
            <input type="text"></input>
          </p>
          <p>{"\n"}</p>
          <p>
            <b>Email id: </b>
            <input type="text"></input>
          </p>
        </form>
        {/* <Card> */}
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          {/* <Card.Header>Matthew</Card.Header> */}
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    );
    {
      /* <Text>Pattnaik bsdka</Text> */
    }
    {
      /* </Router> */
    }
  }
}
