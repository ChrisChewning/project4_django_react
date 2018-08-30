import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const NavBar = () => {
  return (
// ISSUE NAVBAR COLLAPSES AND LEAVES HALF OUT WHEN MOBILE
    <nav className='navBar col s12'>
      <div id='navLinkLeft'>
        <a href="/" className='black-text'>Home</a>
      </div>
      <div className='navLinkRight'>
        <a href="/whatElse">Other Work</a>
        <a href="/similarshows">Similar Shows</a>
        <a href="/quotes">Fav. Quotes!</a>
        <a href="/blog">Blog</a>
      </div>
    </nav>



 // <Nav className='navBar'>
 //        <NavItem id='navLinkLeft'>
 //          <NavLink href="/" className='black-text'>Home</NavLink>
 //        </NavItem>
 //        <NavItem className='navLinkRight'>
 //          <NavLink href="/whatElse">Other Work</NavLink>
 //        </NavItem>
 //        <NavItem className='navLinkRight'>
 //          <NavLink href="/similarshows">Similar Shows</NavLink>
 //        </NavItem>
 //        <NavItem className='navLinkRight'>
 //          <NavLink href='/quotes'>Fav. Quotes!</NavLink>
 //        </NavItem>
 //        <NavItem className='navLinkRight'>
 //          <NavLink href='/blog'>Blog</NavLink>
 //        </NavItem>
 //      </Nav>
)}


export default NavBar;
