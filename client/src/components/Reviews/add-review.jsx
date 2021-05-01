import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderForm = this.renderForm.bind(this);
    this.clickTracker = this.clickTracker.bind(this);
  }

  clickTracker() {
    this.props.clickTracking('add-review-button', 'Reviews');
  }

  renderForm() {
    this.clickTracker();
    this.props.changeFormState(true);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.renderForm}
          className="review-btn"
          type="button"
          data-testid="add-review"
        >
          Add Review
        </button>
      </div>
    );
  }
}

export default AddReview;
