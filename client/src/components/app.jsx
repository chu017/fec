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
import sampleDataOutfit from './sampleData_outfit.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfits: sampleDataOutfit.outfits,
    };

    this.getOutfit = this.getOutfit.bind(this);
  }

  componentDidMount() {
    this.getOutfit();
  }

  getOutfit() {
    const outfit = JSON.parse(localStorage.getItem('outfit'));
    console.log(outfit);
    if (outfit) {
      this.setState({ outfits: [outfit, ...this.state.outfits] });
    }
  }

  render() {
    return (
      <div>
        <Overview data={sampleData} getOutfit={this.getOutfit} />
        <Related data={sampleData} newItem={this.state.outfits} />
        <QA data={sampleData} />
        <Reviews data={sampleData} />
      </div>
    );
  }
}

export default App;
