import React, {Component} from 'react'
const Cookies = require('js-cookie')


class CommentForm extends Component {
constructor(props) {
super(props);
this.state = {
  //could you wrap this in an object?
    name: '',
    message: '',
  }
}


handleChange = (e) => {
  this.setState({[e.target.name]:e.target.value})
}
//NEED THE ROUTE IN HERE.


handleSubmit = async (e) => {
  e.preventDefault();

//componentDidMount function here.
  const getComment = await fetch('http://localhost:8000/api/comments/', {
    method: 'GET',
    // credentials: 'include', deals w authentication & login. If not logged in, your api won't be read. this is all tied to settings.py REST_FRAMEWORK
    // body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
  }
  });


const addComment = async (e) => {
  e.preventDefault();
  try {
  const postComment = await fetch('http://localhost:8000/api/comments/', {
    // const tokenCookies = Cookies.get('csrftoken');

    method: 'POST',
    // credentials: 'include',
    body: JSON.stringify(this.state),
    headers: {
        'Accept': 'application/json', //accept this format.
        'Content-Type': 'application/json',
        // 'X-CSRFToken': tokenCookies
    }
  } //end of try
)} catch(err) {
    console.log(err, ' this is error');
  }
}

}


// } //end of constructor function.

//when you call it down below you use this since you
render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <input type="text" value={this.state.name} name="name" placeholder="your name"
          onChange={this.handleChange} />
        </label>
        <label>
        Message:
        <input type="text" value={this.state.message} name="message" placeholder="your comment"
          onChange={this.handleChange} />
        </label>
        <input type='Submit' onChange={this.handleSubmit} />
      </form>

  {/* {this.state.name} */}
  </div>
)
}

}

export default CommentForm;
