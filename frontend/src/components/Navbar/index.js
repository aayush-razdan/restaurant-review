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
const Navbar = () => {
  return (
    <>
  
    
      <Nav>
     {/* <span className="logo">
    <NavLink to='/'>
    
          <img src={require('../../images/logo.svg')} alt='logo' />
        <div className="logoname"> NOOBS</div> 
        </NavLink>
    </span>*/}
        <Bars />
        <NavMenu>
         
          <NavLink to='/explore' activeStyle>
            Explore
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
           <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> 
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;
