/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart">
        <img className="cart-img" alt="" src={this.props.item.photos[0].url} />
        <h2>{this.props.item.name}</h2>
        <div>{this.props.item.original_price}</div>
      </div>
    );
  }
}

export default ShoppingCart;
