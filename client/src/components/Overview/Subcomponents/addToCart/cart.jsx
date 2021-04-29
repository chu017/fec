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

        <img className="cart-img" alt="" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />

        <div className="cart-text">
          <h2>Product: Camo Onesie</h2>
          <div>Style: Camo Onesie</div>
          <div>Sale price: $140</div>
          <div>Size: {this.props.item.sku_id}</div>
          <div>Quntity: {this.props.item.count}</div>
        </div>

      </div>
    );
  }
}

export default Cart;
