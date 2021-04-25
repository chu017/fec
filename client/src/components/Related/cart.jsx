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

        <img className="cart-img" alt="" src={this.props.item.photos[0].url} />

        <div className="cart-text">
          <h2>{this.props.item.name}</h2>
          <div>Sale price: {this.props.item.original_price}</div>
          <div>Size: 1</div>
          <div>Quantity: 1</div>
        </div>

      </div>
    );
  }
}

export default Cart;
