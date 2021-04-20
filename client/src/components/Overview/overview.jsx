/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
// import styled from 'styled-components';
import Header from './header.jsx';
import ProductInfoOne from './productInfoOne.jsx';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import ProductInfoTwo from './productInfoTwo.jsx';

const Overview = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="overview">
        <div className="header">
          <Header data={this.props.data} />
        </div>

        {/* <div className="body"> */}
        <div className="main">
          <ImageGallery data={this.props.data} />
        </div>

        <div className="sidebar">
          <ProductInfoOne data={this.props.data} />
          <br />
          <StyleSelector data={this.props.data} />
          <br />
          <AddToCart data={this.props.data} />
        </div>
        {/* </div> */}

        <div className="footer">
          <ProductInfoTwo data={this.props.data} />
        </div>

        <br />
      </div>
    );
  }
};

export default Overview;
