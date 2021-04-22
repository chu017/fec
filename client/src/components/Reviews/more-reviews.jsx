import React from 'react';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
<<<<<<< HEAD
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addPosts(this.props.prevPosts);
=======
    this.state = {

    };
>>>>>>> Base component structure, and some dynamic data added.
=======
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addPosts(this.props.prevPosts);
>>>>>>> more reviews button functionality created
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <button onClick={this.handleClick} className="review-btn" type="button">More Reviews</button>
=======
        <button className="review-btn" type="button">Review Posts</button>
>>>>>>> Base component structure, and some dynamic data added.
=======
        <button onClick={this.handleClick} className="review-btn" type="button">Review Posts</button>
>>>>>>> more reviews button functionality created
      </div>
    );
  }
}

export default MoreReviews;
