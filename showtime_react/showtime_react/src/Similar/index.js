import React, { Component } from 'react';
// import Welcome from './Welcome';

class Similar extends Component {
  constructor(props) {
  super();
  this.state = {
    similar: '',
  }
}

//GET DATA
getSimilar = async () => {
  try {
    const similarData = await fetch("https://tastedive.com/api/similar?k=317664-westwing-GQQG6YPC&q=west+wing&limit=3")

    const getSimilarJson = await similarData.json();
    console.log(getSimilarJson.Similar.Results);
    return getSimilarJson;

  } catch (err) {
    return err;
  }
} //end of async call.


// var newArray = this.state.oldArray.map(function(obj){
//     return { id: obj.id, url: obj.url, }
// });

// return newArray[0].url + newArray[0].id

// LOAD DATA loads the getSimilar function and then all the data from above.
componentDidMount() {
  this.getSimilar().then((similarData) => {

    this.setState({similar:similarData.Similar.Results[0]}) //parse out what data you want.
    console.log(this.state.similar);
  })
}

render() {
//NEED TO MAP OVER DATA HERE.

// let showsMapped = this.similar.map((shows, i) => {
//   return (
//     <li key={i}> {this.state.similar} </li>
//   )
// })



return (
  <div className = "similarShows">
      <h1>Most Similar Shows: </h1>
      <p>hey</p>
    <p>  {this.state.similar} </p>
    {/* if you don't map or spread operator over it 1st, you'll get the error 'Objects are not valid as a React child (found: object with keys {Name, Type}). If you meant to render a collection of children, use an array instead.' */}

   {/* <Welcome shows={this.state.similar}/> */}
   </div>
);
}

}

export default Similar;
