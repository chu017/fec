/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import ReactDOM from 'react-dom';
import RatingsReviews from './ratings-reviews.jsx';
import SortBy from './sort-by.jsx';
import ReviewPosts from './review-posts.jsx';
import MoreReviews from './more-reviews.jsx';
import AddReview from './add-review.jsx';
import ReviewForm from './review-form.jsx';
import helpers from './helpers.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.reviews = this.props.data.reviews;

    this.state = {
      filterBy: [],
      showPosts: 2,
      sortedResults: this.reviews.reviews.results,
      selected: 'relavence',
      renderForm: false,
    };

    this.filterReviews = this.filterReviews.bind(this);
    this.addPosts = this.addPosts.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
    this.sortResults = this.sortResults.bind(this);
    this.changeFormState = this.changeFormState.bind(this);
    this.renderReviewForm = this.renderReviewForm.bind(this);
  }

  componentDidMount() {
    this.sortResults(this.state.selected);
  }

  filterReviews(newFilter) {
    let filterByArr = this.state.filterBy;
    if (!newFilter) {
      filterByArr = [];
    } else if (filterByArr.includes(newFilter)) {
      filterByArr.splice(filterByArr.indexOf(newFilter), 1);
    } else {
      filterByArr.push(newFilter);
    }
    this.setState({
      filterBy: filterByArr,
    });
  }

  addPosts(prevPosts) {
    this.setState({
      showPosts: prevPosts + 2,
    });
  }

  changeSelected(value) {
    this.setState({
      selected: value,
    }, () => this.sortResults(this.state.selected));
  }

  sortResults(sortMetric) {
    let sortedArr = this.reviews.reviews.results;
    if (sortMetric === 'newest') {
      sortedArr = sortedArr.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortMetric === 'helpfulness') {
      sortedArr = sortedArr.sort((a, b) => b.helpfulness - a.helpfulness);
    } else {
      sortedArr = sortedArr.sort((a, b) => new Date(b.date) - new Date(a.date))
        .sort((a, b) => {
          if (a.date === b.date) {
            return b.helpfulness - a.helpfulness;
          }
        });
    }
    this.setState({
      sortedResults: sortedArr,
    });
  }

  changeFormState(formState) {
    this.setState({
      renderForm: formState,
    }, () => this.renderReviewForm());
  }

  renderReviewForm() {
    if (this.state.renderForm) {
      return (
        <ReviewForm hideForm={this.changeFormState} />
      );
    }
  }

  render() {
    const renderReviewPosts = () => {
      if (this.state.filterBy.length) {
        return this.state.sortedResults
          .filter(result => this.state.filterBy.includes(result.rating))
          .slice(0, this.state.showPosts)
          .map(result => <ReviewPosts
            data={this.props.data}
            title={result.summary}
            body={result.body}
            user={result.reviewer_name}
            date={result.date}
            rating={result.rating}
            photos={result.photos}
            recommend={result.recommend}
            response={result.response}
          />);
      }
      return this.state.sortedResults
        .slice(0, this.state.showPosts)
        .map(result => <ReviewPosts
          data={this.props.data}
          title={result.summary}
          body={result.body}
          user={result.reviewer_name}
          date={result.date}
          rating={result.rating}
          photos={result.photos}
          recommend={result.recommend}
          response={result.response}
        />);
    };

    return (
      <div className="reviews">
        {console.log('reviews:', this.reviews)}
        <div className="reviews-col-1">
          <RatingsReviews
            avgRating={this.props.avgRating}
            filterBy={this.state.filterBy}
            addPosts={this.addPosts}
            filter={this.filterReviews}
            data={this.props.data}
            ratingPercentage={this.props.ratingPercentage}
          />
        </div>
        <div className="reviews-col-2">
          <SortBy
            selected={this.state.selected}
            data={this.props.data}
            changeSelected={this.changeSelected}
          />
          {renderReviewPosts()}
          <div className="reviews-btn-row">
            <MoreReviews
              prevPosts={this.state.showPosts}
              addPosts={this.addPosts}
              data={this.props.data}
            />
            <AddReview changeFormState={this.changeFormState} data={this.props.data} />
          </div>
        </div>
        {this.renderReviewForm()}
      </div>
    );
  }
}

export default Reviews;
