import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './styles.css';
import CreateUser from "../Pages/CreateUser";

const Navbar = () => {
  return (
      <Nav>
      <NavLink to='/' className="logo">
        <h2 style={{color:'white'}}>NOOBS</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/createReview' activeStyle>
            Blog
          </NavLink>
          
          <NavLink to='/RestaurantList' activeStyle>
          Restaurants near you
          </NavLink>
          <NavLink to='/contact' activeStyle>
           Contact Us
          </NavLink>
          {/* <NavLink to='/CreateUser' activeStyle>Sign In</NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/CreateUser'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  );
};

export default Navbar;