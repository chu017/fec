/* eslint-disable class-methods-use-this */
import React from 'react';
import ProductCharacteristics from './product-characteristics.jsx';
import helpers from './helpers.js';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewSummary: '',
      reviewBody: '',
      email: '',
      nickname: '',
      starInnerWidth: 0,
      formStars: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.starProducer = this.starProducer.bind(this);
    this.setStarRating = this.setStarRating.bind(this);
    this.produceProductCharacteristics = this.produceProductCharacteristics.bind(this);
    this.displayErrorMessage = this.displayErrorMessage.bind(this);
  }

  componentDidMount() {
    this.starProducer();
  }

  handleSubmit(e) {
    e.preventDefault();
    const errorMessage = 'You must enter the folowing';
    if (!this.state.reviewSummary.length ||
      !this.state.reviewBody.length ||
      !this.state.email.length ||
      !this.state.nickname.length) {
      console.log('yay');
      this.setState({
        error: errorMessage,
      });
    } else {
      alert('Thank you for your submission');
      this.hideForm();
    }
  }

  hideForm() {
    this.props.hideForm(false);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setStarRating(e) {
    this.setState({
      starsToFill: +e.target.id,
    }, () => this.starProducer());
  }

  starProducer() {
    const stars = [];
    const darkStar = {
      fontWeight: 900,
    };
    const lightStar = {
      fontWeight: 200,
    };
    for (let i = 1; i < 6; i++) {
      if (this.state.starsToFill && i <= this.state.starsToFill) {
        stars.push(
          <div
            onClick={this.setStarRating}
            className="form-stars-outer"
            id={i}
            style={darkStar}
          />,
        );
      } else {
        stars.push(
          <div
            onClick={this.setStarRating}
            className="form-stars-outer"
            id={i}
            style={lightStar}
          />,
        );
      }
    }
    this.setState({
      formStars: stars,
    });
  }

  produceProductCharacteristics() {
    const table = helpers.productCharacteristicsTable;
    let currentRow;
    const rows = [];
    for (let i = 0; i < table.length; i++) {
      currentRow = table[i];
      rows.push(
        <ProductCharacteristics name={currentRow[0]} description={currentRow} />,
      );
    }
    return rows;
  }

  displayErrorMessage() {
    if (this.state.error) {
      return this.state.error;
    }
  }

  render() {
    const starInnerWidth = {
      width: this.state.starInnerWidth,
    };

    const center = {
      display: 'flex',
      justifyContent: 'center',
    };

    const renderRatingsDescription = () => {
      if (this.state.starsToFill) {
        return (
          <ul className="ratings-description">
            <li>1 star - "Poor"</li>
            <li>2 stars - "Fair"</li>
            <li>3 stars - "Average"</li>
            <li>4 stars - "Good"</li>
            <li>5 stars - "Great"</li>
          </ul>
        );
      }
    };

    const error = {
      color: 'red',
    };

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <button onClick={this.hideForm} className="exit-form" type="button">X</button>
          <h3 className="write-review-heading">Write Your Review</h3>
          <h4 style={error}>{this.displayErrorMessage()}</h4>
          <h4>About the product:</h4>
          <div className="form-inputs-container">
            <div className="form-row form-top-row">
              <label className="form-label">
                Do you recommend this product?:
                <label className="radio-label">
                  <input type="radio" value="Yes" name="gender" />
                  Yes
                </label>
                <label className="radio-label">
                  <input type="radio" value="No" name="gender" />
                  No
                </label>
              </label>
              <div className="form-label form-stars-and-description">
                <div className="form-stars-container">
                  <div className="form-stars-header">Overall rating:</div>
                  {this.state.formStars.map(star => star)}
                </div>
                {renderRatingsDescription()}
              </div>
            </div>
            <div className="form-label" style={center}>
              <div className="product-characteristics-container">
                <h4 className="product-characteristics-heading">Product Characteristics:</h4>
                {this.produceProductCharacteristics()}
              </div>
            </div>
            <div className="form-row">
              <label className="form-label text-input-label">
                Review Summary:
                <textarea
                  className="text-inputs"
                  type="text"
                  value={this.state.reviewSummary}
                  placeholder="Example: Best Purchase Ever!"
                  maxLength="60"
                  rows="2"
                  onChange={this.handleChange}
                  name="reviewSummary"
                />
              </label>
            </div>
            <div className="form-row">
              <label className="form-label text-input-label">
                Review Body:
                <textarea
                  className="text-inputs review-body"
                  type="text"
                  value={this.state.reviewBody}
                  placeholder="Why did you like the product or not?"
                  minLength="50"
                  rows="6"
                  onChange={this.handleChange}
                  name="reviewBody"
                />
              </label>
            </div>
            <div className="form-row">
              <label className="form-label text-input-label">
                What is your nickname?:
                <input
                  className="text-inputs"
                  type="text"
                  value={this.state.nickname}
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  onChange={this.handleChange}
                  name="nickname"
                />
              </label>
            </div>
            <div className="form-row">
              <label className="form-label text-input-label">
                Email:
                <input
                  className="text-inputs"
                  type="text"
                  value={this.state.email}
                  placeholder="Example: jackson11@email.com"
                  maxLength="60"
                  onChange={this.handleChange}
                  name="email"
                />
              </label>
            </div>
          </div>
          <input className="submit-form" type="submit" value="Submit" />
        </form>
        <div onClick={this.hideForm} className="form-cover"></div>
      </div>
    );
  }
}

export default ReviewForm;
