import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import QuoteRandomizer from './QuoteRandomizer';
import './App.css';
import './index.css';
import Nav from './Nav';
import Error from './Error';
import Welcome from './Welcome';

class Hello extends Component {

render() {
  return (
    <div>

      < Nav />
    {/* <h1> Hiya {this.props.name}</h1> */}


  <Switch>
    {/* switch is basically like the js switch statement */}
{/* <Route exact path='' /> */}
{/* <Route exact path='/home' /> */}
<Route exact path='/home' component = {Welcome} />
<Route exact path='/quotes' component= {QuoteRandomizer}/>
<Route path='*' component= { Error } />
<Redirect from='*' to='/home' />
  </Switch>

</div>
  )
}

}


export default Hello;
