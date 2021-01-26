/*import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;

  }
`
export const NavbarContainer = styled.div`
 display:flex;
 justify-content: space-between;
 height: 80px;
 z-index:1;
 width: 100%;
 padding:0 24px;
 max-width: 1100 px;
`
export const NavLogo=styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;

`
export const MobileIcon=styled.div`
display:none;

@media screen and (max-width: 768px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform:transform(-100%,60%);
  font-size:1.8rem;
  cursor:pointer;
  color:#fff;
}
`
export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style: none;
text-align:center;
margin-right:-22px;
`
export const NavItem=styled.li`
height:80px;
`

export const NavLinks=styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
height:100%;
cusrsor:pointer;

&.active{
  border-bottom: 3px solid #01bf71
}
`;

export const NavBtn=styled.nav`
display:flex;
align-items:center;
@media screen and (max-width: 768px){
  display:none;
}
`

export const NavBtnLink=styled(LinkR)`
border-radies:50px;
background:#01bf71;
white-space:nowrap;
padding: 10px 22px;
color:#0106066;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
  transition: all 0.2s ease-in-out;
  background:#fff;
  color:#010606;
}
`
*/
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  opacity:0.95;
  height:7.5em;
  display: flex;
  width:100%;
  //padding: 10px;
  z-index: 10;
  justify-content:flex-end;

  /* Third Nav */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
 //margin-left:10px;
  padding: 0 1rem;
  height: 100%;
  font-size:18px;
  cursor: pointer;
  &:focus, &:hover{
    color: #3fc060;
    text-decoration: none;

  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
   margin-right: 22px; 
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right:2%;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #3fc060;
  padding: 12px 22px;
  color: #fff;
  font-weight:bold;
  font-size:16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
 &:hover,  &:active  {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;

  }
`;
export const h1=styled.div`
color:black;

`;