import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div styles={{ height: '1000px', overflowY: 'scroll' }}>
      <header className="jumbotron">
        <div className="container">
          <h1>
            <span className="glyphicon glyphicon-tent"></span> Welcome To Review
          </h1>
          
          <p>By Quarantine Lovers</p>
          <p>

            <Link to="/CreateRestaurant">
            <Button variant="contained" color="primary" size="14%">
Add Restaurant
</Button>
             
            </Link>
          </p>
        </div>
        
      </header>

     <img src="https://format-com-cld-res.cloudinary.com/image/private/s--yU5hjwQS--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/1a734fc5206bed55cf9be93c30ed8e52/RamenFeatured-1.jpg"/>
     <img src="https://format-com-cld-res.cloudinary.com/image/private/s--yU5hjwQS--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/1a734fc5206bed55cf9be93c30ed8e52/RamenFeatured-1.jpg"/>
     <img src="https://format-com-cld-res.cloudinary.com/image/private/s--yU5hjwQS--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/1a734fc5206bed55cf9be93c30ed8e52/RamenFeatured-1.jpg"/>

        </div>
      
    );
  }
}
