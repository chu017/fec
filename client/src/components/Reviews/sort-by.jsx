import React from 'react';

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = {};

    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.changeSelected(e.target.value);
=======
    this.state = {

    };
>>>>>>> Base component structure, and some dynamic data added.
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="sort-by-container">
        <label className="sort-by-label" htmlFor="sort-by">{this.props.data.reviews.reviews.results.length} reviews, sorted by</label>
        <select onChange={this.change} name="sort-by" className="sort-by" value={this.props.selected}>
          <option value="relavance">relavence</option>
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
        </select>
=======
      <div className="sort-by">
        {this.props.data.reviews.reviews.results.length} reviews, sorted by
        <a href="#"> relavance</a>
>>>>>>> Base component structure, and some dynamic data added.
      </div>
    );
  }
}

export default ReviewPosts;