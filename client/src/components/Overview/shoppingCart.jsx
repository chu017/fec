/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Cart from './subcomponents/cart.jsx';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.onClose();
  }

  render() {
    return (
      <div className="shopping-container">

        <h2>YOUR BAG</h2>

        {this.props.newItem.map((item, index) => (
          <Cart item={item} key={index} />
        ))}

        <button
          type="button"
          className="shopping-button"
          onClick={this.onClose}
        >
          Back
        </button>

        <br />

      </div>

    );
  }
}

export default ShoppingCart;

/*
      <div className="cart">
        <img className="cart-img" alt="" src={this.props.item.photos[0].url} />
        <h2>{this.props.item.name}</h2>
        <div>{this.props.item.original_price}</div>
      </div>

      <div>
        {this.props.show === true && (
        <div className="modal" id="modal">
          <div className="content">{this.props.children}</div>
          <div className="actions">
            <button
              type="button"
              className="toggle-button"
              onClick={this.onClose}
            >
              Close
            </button>
          </div>
        </div>
        )}
      </div>
*/
