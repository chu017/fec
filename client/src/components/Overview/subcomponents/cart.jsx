/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart">

        <img className="cart-img" alt="" src={this.props.item.thumbnail_url} />

        <div className="cart-text">
          <h2>Camo Onesie</h2>
          <div>Sale price: $140</div>
          <div>Size: S</div>
          <div>Quantity: 1</div>
        </div>

      </div>
    );
  }
}

export default Cart;
