/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import sampleData from './sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      quantity: null,
    };
  }

  componentDidMount() {
    const size = localStorage.getItem('size');
    const quantity = localStorage.getItem('quanity');
    console.log('component Mount');
    console.log(size, quantity);
    this.setState({ size, quantity });
  }

  render() {
    return (
      <div>
        <Overview data={sampleData} />
        <Related data={sampleData} newItem={this.state.size} />
        <QA data={sampleData} />
        <Reviews data={sampleData} />
      </div>
    );
  }
}

export default App;
