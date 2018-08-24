import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const NavBar = () => {
  return (
<Nav className='navBar'>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/whatElse">Actors' Other Work</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/similarshows">Similar Shows</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/quotes'>Get a Quote!</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/blog'>Blog</NavLink>
        </NavItem>
      </Nav>
)}


export default NavBar;
