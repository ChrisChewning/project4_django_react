import React, {Component} from 'react'
import Shows from '../Shows';

class QuoteRandomizer extends Component {

constructor(){
  super();

  this.state = {
    quote: [],
  }
}




//can you only use the this keyword inside of render?

handleClick = () => {
        const quotes = [' "Some (Schoolchildren) Don\'t... Raise Their Hand Cause They Think They\'re Going To Be Wrong. I Think You Should Say To These Kids, \'You Think You Get It Wrong Sometimes, You Should Come... See How The Big Boys Do It.\' " — C.J. Cregg',

        ' "I\'m The Press Secretary, Boo-Boo. I Don\'t Have That Kind Of Time." — C.J. Cregg', ' "I Think Ambition Is Good. I Think Overreaching Is Good." — Sam Seaborn',

        ' Flight Attendant: "Sir, I\'m going to have to ask that you turn off your cellular phone. Toby: "We\'re flying in a Lockheed Eagle Series L-1011. Came off the line ten months ago. Carries a Sim-5 transponder tracking system. And you\'re telling me I can still flummox this thing with something I bought at Radio Shack?" ',

        'Leo: (on the phone with the New York Times) 17 across. Yes, 17 across is wrong... You\'re spelling his name wrong... What\'s my name? My name doesn\'t matter. I am just an ordinary citizen who relies on the Times crossword for stimulation. And I\'m telling you that I met the man twice. And I recommended a pre-emptive Exocet missile strike against his air force, so I think I know how... C.J.: Leo. Leo: They hang up on me every time. C.J: That\'s almost hard to believe.',



 ];



        //put Math.floor in an array. not just Math.floor(())
        let randomQuote = quotes[Math.floor((Math.random() * (quotes.length)))];
        console.log(quotes); //logs out [hi, hello, 'how are you?']
        this.setState({quote: randomQuote}); //why ({}) and not just {}
        console.log(this.state.quote); //empty array. isn't updated.
}

//wwQuotes = ['hi', 'hello']; //or let wwQuotes won't work outside a function.


//create variables in constructor function or in functions because you're  inside of a class. OR between the class and import.
//in b.w your constructor and render is where any functions you want your component to have access to if you'll use it in return. ex: event handlers (like handleClick), lifecycle methods (componentDidMount, willMount, willReceiveProps,Didupdate,)


  render() {

    //space for logic that needs to be scoped inside the render function.
    //var is okay.
    //

    return (
      <div>
        <h1>This is quote randomizer</h1>
        {/* <button onClick={this.getQuote}> */}
        <button onClick={this.handleClick}>Click Me!</button>
          <br/>
          {this.state.quote}
          {/* {this.state.quote === true ? null : 'Let Bartlet Be Bartlet'} */}

      {/* <Shows quote={this.props.quote} /> */}
      {/* returning a jsx element. everything in this jsx element is already efined. when it gets to Shows it needs to know what it is. so it has to be imported to use in this class. */}

      </div>
    )
  }
}

export default QuoteRandomizer;
