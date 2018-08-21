import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import QuoteRandomizer from './QuoteRandomizer';
import './App.css';
import './index.css';
import Nav from './Nav';
import Error from './Error';
import Welcome from './Welcome';
import Similar from './Similar';
import WhatElse from './WhatElse';
import Shows from './Shows';
import CommentBox from './CommentBox';

class App extends Component {




render() {

  return (
    <div>

  < Nav />
  < CommentBox />

  {/* < Shows /> */}

    <Switch>
      <Route exact path='/' component = {Welcome} />
      <Route exact path='/whatelse' component ={WhatElse} />
      <Route exact path='/quotes' component= {QuoteRandomizer}/>
      <Route exact path='/similarshows' component= {Similar} />
      <Route path='*' component= { Error } />
      <Redirect from='*' to='/home' />
    </Switch>


    </div>
  )
}

}


export default App;
