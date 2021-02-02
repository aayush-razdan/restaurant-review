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