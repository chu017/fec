
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import sampleData from './sampleData.js';
import helpers from '../components/Reviews/helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
    };

    this.getRating = this.getRating.bind(this);
    this.ratingPercentage = this.ratingPercentage.bind(this);
  }

  componentDidMount() {
    const URL = window.location.href;
    const productID = URL.split('products/')[1].split('/')[0];
    $.ajax({
      url: `/api/products/${productID}`,
      success: (responseData) => this.setState({ data: responseData },
        () => this.getRating()),
    });
  }

  getRating() {
    let avgRating = helpers.averageOfRatings(this.state.data.reviews.reviewMeta.ratings);
    if (avgRating.toString().length === 1) {
      avgRating = avgRating.toString() + '.0';
    }
    this.setState({
      avgRating,
    }, () => this.ratingPercentage());
  }

  ratingPercentage() {
    let percentage = this.state.avgRating / 5;
    percentage = percentage * 100;
    this.setState({
      ratingPercentage: `${Math.round(percentage / 10) * 10}%`,
    });
  }

  render() {
    return (
      <div>
        {/* <Overview data={this.state.data} key={Math.random() * 1000009} /> */}
        <Related
          data={this.state.data} key={Math.random() * 1000007}
        />
        <QA data={this.state.data} key={Math.random() * 1000005} />
        <Reviews
          ratingPercentage={this.state.ratingPercentage}
          data={this.state.data}
          key={Math.random() * 1000002}
        />
      </div>
    );
  }
}

export default App;
