import React from 'react';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <button onClick={this.handleClick} className="review-btn" type="button">More Reviews</button>
=======
        <button className="review-btn" type="button">Review Posts</button>
>>>>>>> Base component structure, and some dynamic data added.
      </div>
    );
  }
}

export default MoreReviews;
