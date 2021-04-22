import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
<<<<<<< HEAD
    this.state = {};

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    this.props.changeFormState(true);
=======
    this.state = {

    };
>>>>>>> Base component structure, and some dynamic data added.
=======
    this.state = {};

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    this.props.changeFormState(true);
>>>>>>> added sorting feature, fixed bugs in ratings and reviews section, added form component
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <button onClick={this.renderForm} className="review-btn" type="button">Add Review</button>
=======
        <button className="review-btn" type="button">Add Review</button>
>>>>>>> Base component structure, and some dynamic data added.
=======
        <button onClick={this.renderForm} className="review-btn" type="button">Add Review</button>
>>>>>>> added sorting feature, fixed bugs in ratings and reviews section, added form component
      </div>
    );
  }
}

export default AddReview;
