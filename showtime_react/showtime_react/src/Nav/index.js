import React, {Component} from 'react';
// import {Route, Switch, Link} from 'react-router-dom';


// import Logout from '../Logout';


const Nav = () => {
  return (

    <nav className = "navigation">
      <ul>
        <li>What to Watch</li>
      <li>Daily Quote</li>
      <li>Login / Register</li>
    </ul>
      {/* <ul>
        <li><Link to='/profile'>My Profile</Link></li>
        <li><Link to='/login'>Login</Link></li>

        <li><Link to='/register'>Register</Link>
      </li>

    </ul> */}
  </nav>
  )
}

export default Nav;
