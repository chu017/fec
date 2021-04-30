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
    const { cartInformation, cartStyles } = this.props.item;

    const { results } = cartStyles;
    const { photos } = results[0];
    const { url } = photos[0];
    return (
      <div className="cart">

        <img className="cart-img" alt="" src={url} />

        <div className="cart-text">
          <h2>Product: {cartInformation.name}</h2>
          <div>Style: {results[0].name}</div>
          {/* <div>SKU: {this.props.item.sku_id}</div> */}
          <div>Sale price: {results[0].original_price}</div>
          <div>Size: M</div>
          {/* <div>Quntity: {this.props.item.count}</div> */}
        </div>

      </div>
    );
  }
}

export default Cart;
