import React, {Component} from 'react'


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
  // this.setState({message: e.target.value});
  this.setState({[e.target.name]:e.target.value})
}

//NEED THE ROUTE IN HERE.
handleSubmit = async (e) => {
// this.onSubmit = (e) => {
  e.preventDefault();

  // http://localhost:8000/admin/
  const postComment = await fetch('http://localhost:8000/api/comments/', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  });
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
