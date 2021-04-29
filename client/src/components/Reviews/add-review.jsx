import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm(e) {
    console.log('this happened')
    e.preventDefault();
    this.props.changeFormState(true);
  }

  render() {
    return (
      <div>
        <button onClick={this.renderForm(e)} className="review-btn" type="button">Add Review</button>
      </div>
    );
  }
}

export default AddReview;
