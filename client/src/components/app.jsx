
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
<<<<<<< HEAD
=======
// import ReactDOM from 'react-dom';
>>>>>>> 96e59099fdd0b78fef2438b979266a988b645edd
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
<<<<<<< HEAD
import sampleData from './sampleData.js'
=======
import sampleData from './sampleData.js';
>>>>>>> 96e59099fdd0b78fef2438b979266a988b645edd

class App extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
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
=======

    this.state = {

    };
>>>>>>> 96e59099fdd0b78fef2438b979266a988b645edd
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Overview data={this.state.data} key={Math.random() * 1000009} />
        <Related data={this.state.data} key={Math.random() * 1000007} />
        <QA data={this.state.data} key={Math.random() * 1000005} />
        <Reviews data={this.state.data} key={Math.random() * 1000002} />
      </div>
    )
=======
        <Overview data={sampleData} />
        <Related data={sampleData} />
        <QA data={sampleData} />
        <Reviews data={sampleData} />
      </div>
    );
>>>>>>> 96e59099fdd0b78fef2438b979266a988b645edd
  }
}

export default App;