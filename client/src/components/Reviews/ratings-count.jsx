import React from 'react';
import helpers from './helpers.js';

class RatingsCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getTotalStarRatings = this.getTotalStarRatings.bind(this);
    this.ratingFilter = this.ratingFilter.bind(this);
<<<<<<< HEAD
    this.ratingFilter = this.ratingFilter.bind(this);
=======
>>>>>>> 96e59099fdd0b78fef2438b979266a988b645edd
  }

  getTotalStarRatings(currentRating) {
    let counter = 0;
    this.props.reviews.reviews.results.forEach(review => {
      if (review.rating === currentRating) {
        counter++;
      }
    });
    return counter;
  }

  ratingFilter() {
    this.props.filter(this.props.stars);
    this.props.addPosts(0);
  }

  render() {
    const elWidth = {
      width: this.props.width
    };

    return (
      <div onClick={this.ratingFilter} className="individual-ratings">
        <div className="ratings-pop-up underline">{this.props.stars + ' stars'}</div>
        <div className="star-review-scale">
          <div style={elWidth} className="star-review-scale-inner"></div>
        </div>
        <div className="total-star-ratings underline">{this.getTotalStarRatings(this.props.stars)} total</div>
      </div>
    );
  }
}

export default RatingsCount;
