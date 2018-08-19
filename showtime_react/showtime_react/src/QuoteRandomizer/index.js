import React, {Component} from 'react'

class QuoteRandomizer extends Component {

constructor(){
  super();

  this.state = {
    quote: '',
    haveQuote: false,
  }

  this.end_point = ''
}


getquote = () => {
  console.log('clicking');
}


  render() {
    const { hasQuote } = this.state;
    console.log(this);
    return (
      <div>
        <h1>This is quote randomizer </h1>
        <button onClick={this.getquote}>
          Click Me!
        </button>
        <br />
        {hasQuote === true ? null : 'Let Bartlet Be Bartlet'}
      </div>
    )
  }
}

export default QuoteRandomizer;
