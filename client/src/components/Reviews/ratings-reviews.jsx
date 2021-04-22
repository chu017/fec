import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import helpers from './helpers.js';
import Star from './star.jsx';
import RatingsCount from './ratings-count.jsx';
=======
>>>>>>> Base component structure, and some dynamic data added.
=======
import helpers from './helpers.js';
import Star from './star.jsx';
>>>>>>> Star rating complete, font awesome library added

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
<<<<<<< HEAD
    this.reviews = this.props.data.reviews;

    this.state = {};
=======
    this.reviews = this.props.data.reviews;

<<<<<<< HEAD
    this.state = this.getRatings();
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
    this.state = {};
>>>>>>> Setup filtering functionality for review list

    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.createRatingsCountBars = this.createRatingsCountBars.bind(this);
    this.getRatings = this.getRatings.bind(this);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.filtersApplied = this.filtersApplied.bind(this);
    this.showFilters = this.showFilters.bind(this);
=======
>>>>>>> Setup filtering functionality for review list
=======
    this.filtersApplied = this.filtersApplied.bind(this);
    this.showFilters = this.showFilters.bind(this);
>>>>>>> Edited ratings and reviews structure
  }

  componentDidMount() {
    const ratings = this.getRatings();
    this.setState({
      rating: ratings.rating,
      fit: ratings.fit,
      comfort: ratings.comfort,
<<<<<<< HEAD
      length: ratings.length,
      quality: ratings.quality,
      recommendationPercentage: ratings.recommendationPercentage,
    });
  }

  getRecommendationPercentage() {
=======
  };

  getRecommendationPercentage () {
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
      recommendationPercentage: ratings.recommendationPercentage,
    });
  }

  getRecommendationPercentage() {
>>>>>>> Setup filtering functionality for review list
    const recommendationArray = [];
    for (let result of this.reviews.reviews.results) {
      if (result.recommend) recommendationArray.push(1);
      else { recommendationArray.push(0) };
<<<<<<< HEAD
    }
    return `${(helpers.average(recommendationArray) * 100).toFixed(2)}%`;
  }

  getRatings() {
    let rating = helpers.averageOfRatings(this.reviews.reviewMeta.ratings);
    let fit = this.reviews.reviewMeta.characteristics.Fit.value / 5;
    let comfort = this.reviews.reviewMeta.characteristics.Comfort.value / 5;
    let length = this.reviews.reviewMeta.characteristics.Length.value / 5;
    let quality = this.reviews.reviewMeta.characteristics.Quality.value / 5;
    const recommendationPercentage = this.getRecommendationPercentage();
    fit = fit * 94, comfort = comfort * 94, length = length * 94, quality = quality * 94;

    if (rating.toString().length === 1) {
      rating = rating.toString() + '.0';
    }
    return { rating, fit, comfort, recommendationPercentage, length, quality };
  }

  getRatingPercentage() {
=======
    }
    return `${(helpers.average(recommendationArray) * 100).toFixed(2)}%`;
  }

  getRatings() {
    let rating = helpers.averageOfRatings(this.reviews.reviewMeta.ratings);
    let fit = this.reviews.reviewMeta.characteristics.Fit.value / 5;
    let comfort = this.reviews.reviewMeta.characteristics.Comfort.value / 5;
    const recommendationPercentage = this.getRecommendationPercentage();
    fit = fit * 94, comfort = comfort * 94;

    if (rating.toString().length === 1) {
      rating = rating.toString() + '.0';
    }
    return { rating, fit, comfort, recommendationPercentage };
  }

<<<<<<< HEAD
  getRatingPercentage () {
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
  getRatingPercentage() {
>>>>>>> Setup filtering functionality for review list
    let percentage = this.state.rating / 5;
    percentage = percentage * 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

<<<<<<< HEAD
<<<<<<< HEAD
  createRatingsCountBars() {
=======
  createRatingsCountBars () {
    //should be percentage of total reviews
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
  createRatingsCountBars() {
>>>>>>> Setup filtering functionality for review list
    const ratingsPercentages = helpers.findReviewPercentage(this.props.data.reviews.reviewMeta.ratings);
    const ratingsCountBars = [];
    let width;
    for (let i = 5; i > 0; i--) {
      if (ratingsPercentages[i]) width = ratingsPercentages[i] * 100;
      else {
        width = 0;
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added sorting feature, fixed bugs in ratings and reviews section, added form component
      ratingsCountBars.push(
        <RatingsCount
          addPosts={this.props.addPosts}
          filter={this.props.filter}
          reviews={this.reviews}
          width={width + '%'}
          stars={i}
        />,
      );
<<<<<<< HEAD
=======
      ratingsCountBars.push(<RatingsCount reviews={this.reviews} width={width + '%'} stars={i}/>);
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
=======
      ratingsCountBars.push(<RatingsCount filter={this.props.filter} reviews={this.reviews} width={width + '%'} stars={i}/>);
>>>>>>> Setup filtering functionality for review list
=======
>>>>>>> added sorting feature, fixed bugs in ratings and reviews section, added form component
    }
    return ratingsCountBars;
  }

  filtersApplied() {
    const filtersArr = [];
    this.props.filterBy.forEach(filter => filtersArr
      .push(
        <div className="filters-applied">{filter} star reviews</div>,
      ));
    return filtersArr;
  }

  showFilters() {
    if (this.props.filterBy.length) {
      return (
        <div>
          <div className="underline filters-applied-title">Filters Applied:</div>
          {this.filtersApplied()}
          <div className="underline remove-filters">Remove Filters</div>
        </div>
      );
    }
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage(),
<<<<<<< HEAD
    };

    const positionCarrot1 = {
      left: `${this.state.fit}%`,
    };

    const positionCarrot2 = {
      left: `${this.state.comfort}%`,
    };

    const positionCarrot3 = {
      left: `${this.state.length}%`,
    };

    const positionCarrot4 = {
      left: `${this.state.quality}%`,
=======
>>>>>>> Setup filtering functionality for review list
    };

    const positionCarrot1 = {
      left: `${this.state.fit}%`,
    };

    const positionCarrot2 = {
      left: `${this.state.comfort}%`,
    };

    return (
      <div>
        <h4>Ratings and Reviews</h4>
        <div className="star-rating-container">
          <div className="star-rating-header">{this.state.rating}</div>
          <div className="star-container">
            <div className="stars-outer">
              <div style={starInnerWidth} className="stars-inner"></div>
            </div>
          </div>
        </div>
        <div className="individual-ratings-container">
          <h4>Ratings Breakdown:</h4>
<<<<<<< HEAD
          <h4 className="recommendation-percentage">{this.state.recommendationPercentage}
          of reviews recommend this product out of {this.reviews.reviews.results.length} total reviews</h4>
          {this.createRatingsCountBars().map(ratingsCountBar => ratingsCountBar)}
          <div>{this.showFilters()}</div>
        </div>
        <div className="size-comfort-scale">
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Fit</span>
            <i style={positionCarrot1} className="fas fa-caret-down size-comfort-carrot"></i>
            <div className="size-comfort">
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too small</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Perfect</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too large</small>
              </div>
            </div>
          </div>
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Comfort</span>
            <i style={positionCarrot2} className="fas fa-caret-down size-comfort-carrot"></i>
            <div className="size-comfort">
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Poor</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Great</small>
              </div>
            </div>
          </div>
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Length</span>
            <i style={positionCarrot3} className="fas fa-caret-down size-comfort-carrot"></i>
            <div className="size-comfort">
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too small</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Perfect</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too large</small>
              </div>
            </div>
          </div>
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Quality</span>
            <i style={positionCarrot4} className="fas fa-caret-down size-comfort-carrot"></i>
            <div className="size-comfort">
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Poor</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Great</small>
              </div>
            </div>
          </div>
        </div>
=======

    this.rating = 4.5;

    this.state = {
      starArray: this.starProducer()
    };

    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.starProducer = this.starProducer.bind(this);
    this.starProducer();
  };

  getAverageRating() {
    console.log(this.getRatingPercentage())
    let avgRating = helpers.averageOfRatings(this.props.data.reviews.reviewMeta.ratings);
    if (avgRating.toString().length === 1) {
      avgRating = avgRating.toString() +'.0';
    }
    return avgRating;
  }

  starProducer() {
    let darkStars = this.getAverageRating();
    const starsArray = [];
    // for (let i = 0; i < 5; i++) {
    //   if (darkStars >= 1) {
    //     starsArray.push(true);
    //   } else {
    //     starsArray.push(false);
    //   }
    //   darkStars--;
    // }

    return starsArray;
  }

  getRatingPercentage () {
    let percentage = this.rating / 5;
    percentage = percentage * 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h2>Ratings and Reviews</h2>
>>>>>>> Base component structure, and some dynamic data added.
=======
        <h5>Ratings and Reviews</h5>
        <div className="star-rating-container">
          <div className="star-rating-header">{this.state.rating}</div>
          <div className="star-container">
            {/* { this.state.starArray
              .map(star => <Star darkStar={star} />) } */}
            <div className="stars-outer">
              <div className="stars-inner"></div>
              <span className="number-rating"></span>
            </div>
          </div>
        </div>
        <div className="individual-ratings-container">
<<<<<<< HEAD
          <h4 className="recommendation-percentage">100% of reviews recommend this product</h4>
          <div className="individual-ratings">
            <a href="#">5 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">4 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">3 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">2 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">1 stars</a>
            <div className="star-review-scale"></div></div>
=======
=======
>>>>>>> Filter by rating feature edited
          <h4 className="recommendation-percentage">{this.state.recommendationPercentage}
          of reviews recommend this product out of {this.reviews.reviews.results.length} total reviews</h4>
          {this.createRatingsCountBars().map(ratingsCountBar => ratingsCountBar)}
>>>>>>> Added stars, date, and username to individual review posts. Adjusted rating bars to reflect percentage of total ratings.
        </div>
        <div className="size-comfort-scale">
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Size</span>
            <i style={positionCarrot1} className="fas fa-caret-down size-comfort-carrot"></i>
            <div className="size-comfort">
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too small</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Perfect</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too large</small>
              </div>
            </div>
          </div>
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Comfort</span>
            <i style={positionCarrot2} className="fas fa-caret-down size-comfort-carrot"></i>
            <div className="size-comfort">
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too small</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Perfect</small>
              </div>
              <div className="size-comfort-sub-container">
                <div className="size-comfort-box"></div>
                <small>Too large</small>
              </div>
            </div>
          </div>
        </div>
>>>>>>> Star rating complete, font awesome library added
      </div>
    );
  }
}

export default RatingsReviews;
