import React, {Component} from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// export default class Example extends React.Component {

  class CommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      name: '',
      message: '',
    }
  }


  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }



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

  render() {
    return (
      <div className='commentWrapper'>
      <Form className='commentForm'>
        <h3>What to Cover Next? Email us!</h3>
        <FormGroup>
         <Label for="comment">Comment</Label>
         <Input type="textarea" name="text" id="comment" />
       </FormGroup>
       <FormGroup>
         <Label for="Email">Email</Label>
         <Input type="email" name="email" id="email" />
       </FormGroup>
     <FormGroup>
     <Button className='commentButton'>Submit</Button>
   </FormGroup>


      </Form>
    </div>
)
};
}

export default CommentForm;
