import React from 'react';
import helpers from './helpers.js';

class RatingsCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getTotalStarRatings = this.getTotalStarRatings.bind(this);
<<<<<<< HEAD
<<<<<<< HEAD
    this.ratingFilter = this.ratingFilter.bind(this);
=======
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
    this.ratingFilter = this.ratingFilter.bind(this);
>>>>>>> Setup filtering functionality for review list
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
<<<<<<< HEAD

  ratingFilter() {
    this.props.filter(this.props.stars);
    this.props.addPosts(this.props.reviews.reviews.results.length);
  }
=======
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.

  ratingFilter() {
    this.props.filter(this.props.stars);
  }

  render() {
    const elWidth = {
      width: this.props.width
    };

    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div onClick={this.ratingFilter} className="individual-ratings">
=======
      <div className="individual-ratings">
<<<<<<< HEAD
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
        <div className="ratings-pop-up underline">{this.props.stars + ' stars'}</div>
=======
        <div onClick={this.ratingFilter} className="ratings-pop-up underline">{this.props.stars + ' stars'}</div>
>>>>>>> Setup filtering functionality for review list
=======
      <div onClick={this.ratingFilter} className="individual-ratings">
        <div className="ratings-pop-up underline">{this.props.stars + ' stars'}</div>
>>>>>>> Filter by rating feature edited
        <div className="star-review-scale">
          <div style={elWidth} className="star-review-scale-inner"></div>
        </div>
        <div className="total-star-ratings underline">{this.getTotalStarRatings(this.props.stars)} total</div>
      </div>
    );
  }
}

export default RatingsCount;
