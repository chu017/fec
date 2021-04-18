import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <button onClick={this.renderForm} className="review-btn" type="button">Add Review</button>
=======
        <button className="review-btn" type="button">Add Review</button>
>>>>>>> Base component structure, and some dynamic data added.
      </div>
    );
  }
}

export default AddReview;
