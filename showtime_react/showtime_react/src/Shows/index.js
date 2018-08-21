import React, {Component} from 'react';
import WhatElse from '../WhatElse';
import { Linkify } from 'react-linkify';
import { Link } from 'react-router-dom';
// import QuoteRandomizer from './QuoteRandomizer'

class Shows extends Component {
  constructor(props){
    super();

  this.state = {
    shows: []
  }
}


async componentDidMount() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/actors');
    const shows = await res.json();

    this.setState({shows: shows}) //now you can export the data shows?
  } catch (err) {
    console.log(err);
  }
}

render() {
console.log(this.state.shows);

    return (
    <div>
        {this.state.shows.map(item => (
          // <Linkify>
        <div key={item.id}>
          <a target="_blank" href={item.show_main_url}>{item.show_title}</a>


        </div>
      ))}
      {this.props.quote}
      {/* <Test shows={this.props.shows}/> */}
    </div>
  )
}
}

export default Shows;
