/*import React from 'react';
import {
  Nav,
  NavbarContainer,
NavLogo,MpbileIcon,NavMenu,NavItem,NavLinks,NavBtnLink,NavBtn
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  return (
    <>
      <Nav>
       <NavbarContainer>
         <NavLogo to='/'>QL</NavLogo>
        
         
         <NavMenu>
           <NavItem>
             <NavLinks to="../Pages/createReview">Create Review</NavLinks> 
           </NavItem>
           <NavItem>
             <NavLinks to="../Pages/RestaurantList">Create Review</NavLinks> 
           </NavItem>

         </NavMenu>
         <NavBtnLink to="../Pages/CreateUser">Sign in</NavBtnLink>
       </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
*/
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
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/CreateUser'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;