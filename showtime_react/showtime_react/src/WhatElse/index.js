import React, {Component} from 'react';
import Shows from '../Shows';

class WhatElse extends Component {
  state = {
    actors: []
  }
  async componentDidMount(props) {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/actors');
      const actors = await res.json();
      this.setState({
        actors
      })

    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.actors.map(item => (
          <div key={item.id}>
            <h1>{item.actor_name}</h1>
            <br/>
            <img className='actorImages'src={item.actor_photo_url} />
            <br/>
            <span>{item.shows}</span>
          </div>
        ))}
        {this.props.shows}
      </div>
    );
  }
}

export default WhatElse;
