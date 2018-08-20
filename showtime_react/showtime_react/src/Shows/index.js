import React, {Component} from 'react';
import WhatElse from '../WhatElse';

class Shows extends Component {
  state = {
    shows: [],
  }


async componentDidMount() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/shows');
    const shows = await res.json();
    this.setState({
      shows
    })
  } catch (err) {
    console.log(err);
  }
}
render() {
  return (
    <div>
      {this.state.shows.map(item => (
        <div key={item.id}>
          <h3>{item.show_main_url}</h3>
        </div>
      ))}

      <WhatElse shows={this.state.shows}/>
    </div>
  )
}
}

export default Shows;
