import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import helpers from './helpers.js';
const moment = require('moment');
=======
>>>>>>> Base component structure, and some dynamic data added.
=======
import helpers from './helpers.js';
const moment = require('moment');
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
<<<<<<< HEAD
    this.reviews = this.props.data.reviews;

    this.state = {};

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  getRating() {
    let rating = this.props.rating;

    if (rating.toString().length === 1) {
      rating = rating.toString() + '.0';
    }

    return rating;
  }

  getRatingPercentage() {
    let percentage = this.getRating() / 5;
    percentage *= 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage(),
    };

=======
    this.state = {
=======
    this.reviews = this.props.data.reviews;
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.

    this.state = {
      rating: this.getRating(),
    };

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  getRating() {
    let rating = this.props.rating;

    if (rating.toString().length === 1) {
      rating = rating.toString() + '.0';
    }

    return rating;
  }

  getRatingPercentage() {
    let percentage = this.state.rating / 5;
    percentage = percentage * 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  render() {
<<<<<<< HEAD
>>>>>>> Base component structure, and some dynamic data added.
=======
    const starInnerWidth = {
      width: this.getRatingPercentage(),
    };

>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
    return (
      <div>
        <div className="review-post">
          <div className="review-post-top-row">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
            <div className="star-rating-container">
              <div className="star-container review-post-star-rating">
                <div className="stars-outer">
                  <div style={starInnerWidth} className="stars-inner"></div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="username-date">{`${this.props.user}, ${moment(this.props.date).format('MM/DD/YYYY')}`}</div>
=======
            <div className="star-rating">Stars</div>
            <div className="username-date">User 1234, January 1, 2019</div>
>>>>>>> Base component structure, and some dynamic data added.
=======
            <div className="username-date">{`${this.props.user}, ${moment(this.props.date).format('DD/MM/YYYY')}`}</div>
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
          </div>
          <h3 className="review-post-title">{this.props.title}</h3>
          <p className="review-post-body">{this.props.body}</p>
          <div className="review-post-top-row">
            Helpful? <a className="helpful" href="#"> Yes </a>
            |
            <a className="helpful" href="#"> Report</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewPosts;
