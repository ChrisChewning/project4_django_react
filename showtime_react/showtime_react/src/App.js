import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuoteRandomizer from './QuoteRandomizer';
import './App.css';
import './index.css';
import Nav from './Nav';


class Hello extends Component {

render() {
  return (
    <div>
      < Nav />
    <h1> Hiya {this.props.name}</h1>
  < QuoteRandomizer />

<BrowserRouter>
  <Switch>
<Route exact path='/home' component={Nav}/>
  </Switch>
</BrowserRouter>
</div>
  )
}

}


export default Hello;
