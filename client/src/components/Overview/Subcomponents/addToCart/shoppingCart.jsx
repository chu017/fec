/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Cart from './cart.jsx';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    const { cart } = this.props;
    console.log('shoppingcart DidMount: ', cart);
  }

  onClose() {
    this.props.onClose();
  }

  render() {
    const { cart } = this.props.cartData;
    console.log(cart);
    return (
      <div className="shopping-container">
        <h2>YOUR BAG</h2>
        <button
          type="button"
          className="shopping-button"
          onClick={this.onClose}
        >
          Back
        </button>

        {/* {cart.map((item, index) => (
          <Cart
            item={item}
            key={index}
          />
        ))} */}

        <br />

      </div>

    );
  }
}

export default ShoppingCart;
