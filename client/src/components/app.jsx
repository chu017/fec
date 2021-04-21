/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';

import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import sampleData from './sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  componentDidMount() {
    const URL = window.location.href;
    const productID = URL.split('products/')[1].split('/')[0];
    $.ajax({
      url: `/api/products/${productID}`,
      success: (responseData) => this.setState({ data: responseData }),
    });
  }

  render() {
    return (
      <div>
       <Overview data={this.state.data} key={Math.random() * 1000000} />
        <Related data={this.state.data} key={Math.random() * 1000000} />
        <QA data={this.state.data} key={Math.random() * 1000000} />
        <Reviews data={this.state.data} key={Math.random() * 1000000} />
      </div>
    );
  }
}

export default App;
