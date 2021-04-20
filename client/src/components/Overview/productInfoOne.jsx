/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';

const ProductInfoOne = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="product-information">
        <div>Read all reviews</div>
        <br />
        <div>CATEGORY</div>
        <h2>{this.props.data.product.name}</h2>
        <div>{this.props.data.product.default_price}</div>
      </div>

    );
  }
};

// eslint-disable-next-line eol-last
export default ProductInfoOne;