/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Header from './Subcomponents/header.jsx';
import ProductInfoOne from './Subcomponents/productInfo/productInfoOne.jsx';
import ImageGallery from './Subcomponents/imageGallery/imageGallery.jsx';
import StyleSelector from './Subcomponents/styleSelector/styleSelector.jsx';
import AddToCart from './Subcomponents/addToCart/addToCart.jsx';
import ProductInfoTwo from './Subcomponents/productInfo/productInfoTwo.jsx';

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
            toggleColorMode={this.props.toggleColorMode}
            clickHandler={this.props.clickHandler}
          />
        </div>

        <div className="main">
          <ImageGallery
            data={this.props.style}
            defaultView={this.props.defaultView}
            expandView={this.props.expandView}
            clickHandler={this.props.clickHandler}
          />
        </div>

        <div className="sidebar">
          <ProductInfoOne
            data={this.props.data}
            photos={this.props.style}
            ratingPercentage={this.props.ratingPercentage}
            clickHandler={this.props.clickHandler}
          />
          <br />
          <StyleSelector
            data={this.props.data}
            photos={this.props.style}
            selectStyle={this.props.selectStyle}
            clickHandler={this.props.clickHandler}
            addOutfit={this.addOutfit}
          />
          <br />
          <AddToCart
            data={this.props.data}
            style={this.props.style}
            refreshOutfit={this.props.refreshOutfit}
            clickHandler={this.props.clickHandler}
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
