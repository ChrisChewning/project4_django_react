import React, { Component } from 'react';

class Similar extends Component {
  constructor(props) {
  super();
  this.state = {
    similar: [],
  }
}


getSimilarShows = async() => {
  try {
    const similarData = await fetch("https://api.themoviedb.org/3/tv/688/similar?api_key=5e5af396956ad15decd6239be59b3c2d&language=en-US&page=1");

    const getSimilarJson = await similarData.json();
    console.log(getSimilarJson.results);
    return getSimilarJson;

  } catch (err) {
    return err;
  }
}

componentDidMount(){
this.getSimilarShows().then((similarData) => {
  this.setState({similar: similarData.results})
  console.log(this.state.similar);
})
}


render() {
return (
  <div className = "similarShows">
      <h1>Most Similar Shows: </h1>

      {this.state.similar.map(item => (
        <div key={item}>
          <h3>{item.name}</h3>
          <p>{item.overview}</p>

       </div>
))}
</div>

)}

}


export default Similar;
