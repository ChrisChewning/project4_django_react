import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class Similar extends Component {
  constructor(props) {
  super();
  this.toggle = this.toggle.bind(this);
  this.state = {
    similar: [],
    popoverOpen: false,
  }
}

toggle() {
   this.setState({popoverOpen: !this.state.popoverOpen});
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

//https://reactstrap.github.io/components/collapse/

render() {
return (
  // <Jumbotron className='Jumbotron'>  //OTHER WAY: wrap everything in jumbotron. Comment out div className='similarShows' I think.
<div className="similarShows">
      <h1><i>Most Similar Shows: </i></h1>

      {this.state.similar.map((item, id) => (
        <div key={id} className='Jumbotron'>
          {/* NOTE: originally it was just item as your 1st param and key={item} */}

          {/* <h3>{item.name}</h3> */}
          {/* <h4>{item.overview}</h4> */}

          {/* <Button id="Popover1" onClick={this.toggle}>Click For Show Description */}
      {/* </Button> */}

          {/* <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}> */}

{/* <div>
<Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>

             <PopoverHeader className='similarShowName'>{item.name}</PopoverHeader>
           <PopoverBody className='similarShowOverview'>{item.overview}</PopoverBody>
          </Popover>
         </div> */}
         <h3>{item.name}</h3>
          <p > {item.overview }</p>

       </div>
))}

</div>

)}
}


export default Similar;
