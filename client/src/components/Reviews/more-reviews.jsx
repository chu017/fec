import React from 'react';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addPosts(this.props.prevPosts);
    this.props.clickTracking('more-reviews-button', 'Reviews');
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="review-btn"
          type="button"
          data-testid="more-reviews"
        >
          More Reviews
        </button>
      </div>
    );
  }
}

export default MoreReviews;
