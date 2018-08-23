import React, { Component } from 'react';
// import Welcome from './Welcome';

class Similar extends Component {
  constructor(props) {
  super();
  this.state = {
    similar: [],
  }
}



  // const tokenCookies = Cookies.get('csrftoken');



//GET DATA
getSimilar = async () => {
  try {
    // const similarData = await fetch("https://tastedive.com/api/similar?k=317664-westwing-GQQG6YPC&q=west+wing&limit=5", {
    const similarData = await fetch("https://api.themoviedb.org/3/tv/688/similar?api_key=5e5af396956ad15decd6239be59b3c2d&language=en-US&page=1
", 
    {

      method: 'GET',
      // credentials: 'include',
    headers: {
        'Accept': 'application/json', //accept this format.
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Origin',
        'X-Auth-Token': '317664-westwing-GQQG6YPC',
    }
  }
    )

    const getSimilarJson = await similarData.json();
    console.log(getSimilarJson.Similar.Results);
    return getSimilarJson;

  } catch (err) {
    return err;
  }
} //end of async call.



// LOAD DATA loads the getSimilar function and then all the data from above.
componentDidMount() {
  this.getSimilar().then((similarData) => {
    this.setState({similar:similarData.Similar.Results}) //parse out what data you want.
    console.log(this.state.similar);
  })
}

render() {
return (
  <div className = "similarShows">
      <h1>Most Similar Shows: </h1>

      {this.state.similar.map(item => (
        <ul key={item}>
         <li>{item.Name}, {item.Type}</li>

       </ul>
))}
</div>

)}

}


export default Similar;
