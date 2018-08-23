import React, { Component } from 'react';
// import Welcome from './Welcome';

class Similar extends Component {
  constructor(props) {
  super();
  this.state = {
    similar: [],
  }
}


getSimilarShows = async() => { //note: has to be componentDidMount not just an async function I name.
  try {
    const similarData = await fetch("https://api.themoviedb.org/3/tv/688/similar?api_key=5e5af396956ad15decd6239be59b3c2d&language=en-US&page=1");


    const getSimilarJson = await similarData.json();
    console.log(getSimilarJson.results);
    //WHAT YOU WANT TO RENDER
    //use map to say item.name? and item.overview?
    // console.log(getSimilarJson.results[0].name);
    // console.log(getSimilarJson.results[0].overview);
    return getSimilarJson;

  } catch (err) {
    return err;
  }
} //end of async call.

componentDidMount(){
this.getSimilarShows().then((similarData) => {
  this.setState({similar: similarData.results})
  console.log(this.state.similar);
})
}


// LOAD DATA loads the getSimilar function and then all the data from above.
// componentDidMount() {
//   this.getSimilar().then((similarData) => {
//     this.setState({similar:similarData.Similar.Results}) //parse out what data you want.
//     console.log(this.state.similar);
//   })
// }

render() {
return (
  <div className = "similarShows">
      <h1>Most Similar Shows: </h1>

      {this.state.similar.map(item => (
        <ul key={item}>
          <h3>{item.name}</h3>
          <p>{item.overview}</p>

         {/* <li>{item.Name}, {item.Type}</li> */}

       </ul>
))}
</div>

)}

}


export default Similar;
