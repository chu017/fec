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
    const cartIDs = localStorage.getItem('cart');
    const cartID = cartIDs.split(',');
    const { cart } = this.props;
    const { cartInformation, cartStyles } = cart;
    console.log('shoppingcart DidMount: ', cartID, cartInformation[0]);

    this.setState({ infor: cartInformation[0], style: cartStyles[0] });
  }

  onClose() {
    this.props.onClose();
  }

  render() {
    // console.log(this.state.infor);
    return (
      <div className="shopping-container">
        {this.props.dataReady === true && (<div>Data Ready</div>)}
        <h2>YOUR BAG</h2>
        <button
          type="button"
          className="shopping-button"
          onClick={this.onClose}
        >
          Back
        </button>

        {this.props.cartInfo.map((item, index) => (
          <Cart
            item={item}
            key={index}
          />
        ))}

        <br />

      </div>

    );
  }
}

export default ShoppingCart;
