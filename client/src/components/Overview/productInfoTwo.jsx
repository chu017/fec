import React from 'react';
// import styled from 'styled-components';

const ProductInfoTwo = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>Product Slogan. Pithy Description or Catchphrase</div>
        <div className="product-information-footer">
          <p>
            The So Fatigues will wake you up and fit you in.
            This high energy camo will have you blending in
            to even the wildest surroundings.
          </p>
          <ul>
            <li>GMO and Pesticide free</li>
            <li>Made with 100% Genertic Modification</li>
            <li>This is made up</li>
          </ul>
        </div>
      </div>

    );
  }
};

// eslint-disable-next-line eol-last
export default ProductInfoTwo;