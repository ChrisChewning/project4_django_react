import React, {Component} from 'react';
import { Link } from 'react-router-dom';


// import Logout from '../Logout';

const Nav = () => {
  return (

    <nav className = "navBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/whatelse'>Actors' Other Work?</Link></li>
        <li><Link to='/similarshows'>Similar Shows</Link></li>
        <li><Link to='/quotes'>Get a Quote!</Link></li>
        <li><Link to='/login'>Login / Register</Link></li>

    </ul>
  </nav>
  )
}

export default Nav;
