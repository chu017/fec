import React from 'react';
import ProductInformation from './productInformation.jsx';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';

const Overview = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ImageGallery />
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
        <br />
      </div>
    );
  }
};

export default Overview;
