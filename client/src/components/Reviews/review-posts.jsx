import React from 'react';
import helpers from './helpers.js';
const moment = require('moment');

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

    this.reviews = this.props.data.reviews;

    this.state = {};

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.renderReviewImages = this.renderReviewImages.bind(this);
    this.renderSellerResponse = this.renderSellerResponse.bind(this);
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

  renderReviewImages() {
    const photoArr = this.props.photos;
    const imgTags = [];
    if (photoArr.length) {
      photoArr.map(photo => {
        imgTags.push(<img className="review-post-img" src={photo.url} />)
      });
    }
    return imgTags;
  }

  renderRecommendation() {
    if (this.props.recommend) {
      return (
        <div>
          Yes
          <input type="checkbox" checked />
          No
          <input type="checkbox" />
        </div>
      );
    }
    return (
      <div>
        Yes
        <input type="checkbox" />
        No
        <input type="checkbox" checked />
      </div>
    );
  }

  renderSellerResponse() {
    if (this.props.response) {
      return (
        <div>
          Seller Response:
          <div className="seller-response">{this.props.response}</div>
        </div>
      );
    }
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage(),
    };

    return (
      <div>
        <div className="review-post">
          <div className="review-post-top-row">
            <div className="star-rating-container">
              <div className="star-container review-post-star-rating">
                <div className="stars-outer">
                  <div style={starInnerWidth} className="stars-inner"></div>
                </div>
              </div>
            </div>

            <div className="username-date">{`${this.props.user}, ${moment(this.props.date).format('DD/MM/YYYY')}`}</div>
          </div>
          <h3 className="review-post-title">{this.props.title}</h3>
          <p className="review-post-body">{this.props.body}</p>
          <div className="recommend-product">
            {this.renderRecommendation()}
          </div>
          <div className="review-post-img-container">
            {this.renderReviewImages()}
          </div>
          <div>
            {this.renderSellerResponse()}
          </div>
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
