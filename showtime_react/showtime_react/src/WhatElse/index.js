import React, {Component} from 'react';
// import Welcome from './Welcome';

class WhatElse extends Component {
  state = {
    actors: []
  }
  async componentDidMount() {
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
            <span>{item.actor_age}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default WhatElse;
