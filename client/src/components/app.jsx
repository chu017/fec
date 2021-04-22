
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import sampleData from './sampleData.js'

class App extends React.Component {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Edited ratings and reviews structure
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> Edited ratings and reviews structure
  constructor (props) {
    super(props);
>>>>>>> Base component structure, and some dynamic data added.
>>>>>>> Edited ratings and reviews structure
      data: sampleData,
    };
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
    )
<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
    this.state = {

    };
>>>>>>> Base component structure, and some dynamic data added.
  }

  render() {
    return (
      <div>
        <Overview data={sampleData} />
        <Related data={sampleData} />
        <QA data={sampleData} />
        <Reviews data={sampleData} />
      </div>
    );
>>>>>>> Edited ratings and reviews structure
  }
}

export default App;