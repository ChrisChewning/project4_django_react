import React, {Component} from 'react';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';



//
class CommentBox extends Component {
   render() {
     return (

<div>
         <div class="media">
  <img class="align-self-start mr-3 blogImg" src="https://cdn-images-1.medium.com/max/1200/1*Rnm7db2w1KKm81RNKqIkPA.jpeg" alt="Bradley Whitford in The Handmaid's Tale"></img>

  <div class="media-body">
    <h2 class="mt-0">Josh Lyman on <i>The Handmaid's Tale</i></h2>
    {/* <h1>Josh Lyman on <i>The Handmaid's Tale</i></h1> */}
    <br/>
    <h3>For the last few episodes of the award-winning dystopic show on Hulu, our old pal Josh Lyman guest stars.</h3>

    <h3>I won't go into much detail for fear of giving away spoilers. However, I will say he's more like the guy in <i>Get Out</i> than he is the romantic, give it your all, West Winger we all know and love.</h3>
  </div>

         {/* <h1>Josh Lyman on <i>The Handmaid's Tale</i></h1>
         <h3>For the last few episodes of the award-winning dystopic show on Hulu, our old pal Josh Lyman guest stars.</h3>

         <h5>I won't go into much detail for fear of giving away spoilers. However, I will say he's more like the guy in <i>Get Out</i> than he is the romantic, give it your all, West Winger we all know and love.</h5>
         <p>
           <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
         </p> */

}
</div>
         < CommentForm />
         {/* < CommentList /> */}
       </div>
     );
   }
}

export default CommentBox;
