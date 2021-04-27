/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Header from './header.jsx';
import ProductInfoOne from './productInfo/productInfoOne.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';
import ProductInfoTwo from './productInfo/productInfoTwo.jsx';

const OverviewDefault = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: null,
    };

    this.addOutfit = this.addOutfit.bind(this);
  }

  addOutfit(newOutfit) {
    const outfit = newOutfit;
    this.setState({ outfit });
  }

  render() {
    return (
      <div className="overview-default">
        <div className="header">
          <Header
            data={this.props.data}
            showCart={this.props.showCart}
          />
        </div>

        <div className="main">
          <ImageGallery
            data={this.props.style}
            defaultView={this.props.defaultView}
            expandView={this.props.expandView}
          />
        </div>

        <div className="sidebar">
          <ProductInfoOne
            data={this.props.data}
            photos={this.props.style}
            ratingPercentage={this.props.ratingPercentage}
          />
          <br />
          <StyleSelector
            data={this.props.data}
            photos={this.props.style}
            selectStyle={this.props.selectStyle}
            addOutfit={this.addOutfit}
          />
          <br />
          <AddToCart
            data={this.props.data}
            style={this.props.style}
            getOutfit={this.props.getOutfit}
            outfit={this.state.outfit}
            getCart={this.props.getCart}
          />
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
