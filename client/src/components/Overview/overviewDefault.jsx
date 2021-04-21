/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
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

const OverviewDefault = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="overview-default">
        <div className="header">
          <Header data={this.props.data} />
        </div>

        <div className="main">
          <ImageGallery
            data={this.props.style}
            expandView={this.props.expandView}
          />
        </div>

        <div className="sidebar">
          <ProductInfoOne
            data={this.props.data}
            photos={this.props.style}
          />
          <br />
          <StyleSelector
            photos={this.props.style}
            data={this.props.data}
            selectStyle={this.props.selectStyle}
          />
          <br />
          <AddToCart data={this.props.data} />
        </div>

        <div className="footer">
          <ProductInfoTwo data={this.props.data} />
        </div>

        <br />
      </div>
    );
  }
};

export default OverviewDefault;
