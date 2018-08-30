import React, {Component} from 'react'
import {Button, Jumbotron} from 'reactstrap';


class QuoteRandomizer extends Component {

constructor(){
  super();

  this.state = {
    quote: 'Let Bartlet Be Bartlet',
    img: 'https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2017/08/07/Production/Daily/Style/Images/Merlin_263339.jpg',
    fadeIn: true,
    // https://reactstrap.github.io/components/fade/
       // this.toggle = this.toggle.bind(this);
  }
}


handleClick = () => {

        const quotes = [
          {
            quote: ' "Some (Schoolchildren) Don\'t... Raise Their Hand \'Cause They Think They\'re Going To Be Wrong. I Think You Should Say To These Kids, \'You Think You Get It Wrong Sometimes, You Should Come... See How The Big Boys Do It.\' " — C.J. Cregg',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQYTiozmeISRNyLwMHvuoOVYKxRlZ2MVWFmbMg7oEcyfDf8NQ",
        },
        {
        quote: ' "I Think Ambition Is Good. I Think Overreaching Is Good." — Sam Seaborn',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfQZi5wPqLMsuH3DN7liYi2hbi41i4N2ymcdKHeKU_faJB9yPmQ',
        },

        {
          quote: ' "I\'m The Press Secretary, Boo-Boo. I Don\'t Have That Kind Of Time." — C.J. Cregg',
          img: "https://imgix.bustle.com/rehost/2016/9/14/f1cc3652-6e71-44aa-a5b7-34a390882015.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
      },
        {
          quote: ' Flight Attendant: "Sir, I\'m going to have to ask that you turn off your cellular phone. Toby: "We\'re flying in a Lockheed Eagle Series L-1011. Came off the line ten months ago. Carries a Sim-5 transponder tracking system. And you\'re telling me I can still flummox this thing with something I bought at Radio Shack?" ',
          img: 'https://i.ytimg.com/vi/gHwriLZJdB0/maxresdefault.jpg',
      },
        {
          quote: "The President has nothing but free time, Toby. Right now he\'s in the residence eating Cheerios and enjoying Regis and Kathie Lee. Should I get him for you? -Mrs. Landingham ",
          img: 'https://imgix.bustle.com/rehost/2016/9/13/0339d2a9-2757-4edd-8ca7-5b2db31b90bc.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70'
        },
        {
          img: 'https://media.vanityfair.com/photos/5824ddc6364154776b0ba9d1/master/w_690,c_limit/jb-heroes.gif'
        },
        {
          img: 'https://media.rbl.ms/image?u=%2Ffiles%2F2015%2F06%2F26%2F6357093908628106681361113458_tumblr_lumh6iDhaL1qf4s2to2_250.gif&ho=http%3A%2F%2Fcdn1.theodysseyonline.com&s=442&h=1965855461ab47629cc5a5c3f3e84623794dd9d36cc41daa4863cc30ec4155c2&size=980x&c=2667046497'
        },
        {
          quote: "One victory in a year stinks in a life of an administration. But it\'s not the ones we lose that bother me, Leo. It\'s the ones we don't suit up for! -Toby Ziegler",
          img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/12/18/campaign_images/webdr01/toby-ziegler-knows-all-2-27240-1439418840-17_dblbig.jpg"
        },
        {
          img: 'https://media.vanityfair.com/photos/5824ddbd364154776b0ba9cf/master/w_690,c_limit/jb-teach.gif'
        },
      {
        quote: 'Leo: (on the phone with the New York Times) 17 across. Yes, 17 across is wrong... You\'re spelling his name wrong... What\'s my name? My name doesn\'t matter. I am just an ordinary citizen who relies on the Times crossword for stimulation. And I\'m telling you that I met the man twice. And I recommended a pre-emptive Exocet missile strike against his air force, so I think I know how... C.J.: Leo. Leo: They hang up on me every time. C.J: That\'s almost hard to believe.',
        img: 'https://vignette.wikia.nocookie.net/westwing/images/3/35/Leo_McGarry.jpg/revision/latest?cb=20051221163645',
      },
// };
 ];

//Attempt 1: Tried to set the onClick to the whole object. This error comes up. This is what .map solves.Objects are not valid as a React child (found: object with keys {quote, img}). If you meant to render a collection of children, use an array instead.

        //put Math.floor in an array. not just Math.floor(())
        let randomQuote = quotes[Math.floor((Math.random() * (quotes.length)))];
        console.log(randomQuote); //this is working.
        this.setState({quote: randomQuote.quote});
        this.setState({img: randomQuote.img}); //cant setState her. why?
        //why ({}) and not just {}

        console.log('this.state.quote:', this.state.quote); //empty []
}

//create variables in constructor function or in functions because you're  inside of a class. OR between the class and import.
//in b.w your constructor and render is where any functions you want your component to have access to if you'll use it in return. ex: event handlers (like handleClick), lifecycle methods (componentDidMount, willMount, willReceiveProps,Didupdate,)


  render() {

    //space for logic that needs to be scoped inside the render function.
    //var is okay.


//className="quote"
    return (
      <div>
        <Jumbotron className='jumbotronQuotes'>
        <h1 className='quoteTitle'>Click For Great Quotes!</h1>
        {/* <div className="quoteContainer"> */}
        <div>
          <div>
        <Button type="submit" onClick={this.handleClick} color="primary">Click Me!</Button>
        </div>
        <br/>
        <img className="quoteImage" src={this.state.img}></img>

          <h4 className="quotes">{this.state.quote}</h4>


        </div>
          {/* {this.state.quote === true ? null : 'Let Bartlet Be Bartlet'} */}

      {/* <Shows quote={this.props.quote} /> */}
      {/* returning a jsx element. everything in this jsx element is already efined. when it gets to Shows it needs to know what it is. so it has to be imported to use in this class. */}
    </Jumbotron>
      </div>
    )
  }
}

export default QuoteRandomizer;
