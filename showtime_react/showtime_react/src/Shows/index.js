import React, {Component} from 'react';
import WhatElse from '../WhatElse';
import { Linkify } from 'react-linkify';
import { Link } from 'react-router-dom';
// import QuoteRandomizer from './QuoteRandomizer'

class Shows extends Component {
  constructor(props){
    super();

  this.state = {
    actors: []
  }
}


async componentDidMount() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/actors');
    const actorsData = await res.json(); //set your json response to a new variable called shows.
    console.log(actorsData, ' this is actorsData'); //array of your first api call. your objects inside the array, which is your actors data.

//mapping over the array we got back. loop over each array over each show).

    actorsData.map(async eachActor => { //map through the shows json data.
      //for each show  over that shows json data. list of all your actors.
      console.log(eachActor, ' this is show');
      for (let i = 0; i < eachActor.shows.length; i++) { //map over all your actors' shows. each object is called shows. you go into each array that is called shows.

      //so show (actor object).shows (the array that is the property of shows)

        const showOfShows = await fetch(eachActor.shows[i]);
        const showOfShowsJson = await showOfShows.json();
        eachActor.shows[i] = showOfShowsJson;
      }
      return eachActor;
    })


    this.setState({actors: actorsData}) //now you can export the data shows?
  } catch (err) {
    console.log(err);
  }
}

render() {

  return (
    <div>
      {/* .map() is no logic. .map{} is logic */}
        {
          this.state.actors.map(actor => {
              console.log("actor.shows: ", actor); //you can log if it's inside { in map. not inside (
          return (
            <div key={actor.id}>

              <img className='actorImages'src={actor.actor_photo_url} />
              <br/>
              {/* {actor.shows.map((show, index) => (<li key={index}>{show}</li>))} */}
              <br />
              {/* map through each actor's shows and return an <a></a> with that show_main_url */}
              {
                actor.shows.map((show) => {
                  console.log('show: ', show, typeof show);
                  return (
                    <div>
                      <a href={show.show_main_url}>
                        test
                      </a>
                    </div>
                  )
                })
              }
              <a
                target="_blank" href={actor.shows.show_main_url}>
                {actor.shows.show_title}
              </a>
            </div>
          ) //returning the jsx element closes.
      })}
    </div>
  )
}}

export default Shows;
