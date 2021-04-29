/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
import Func from '../helpers.js';

const AddToCart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'XS',
      size_num: 8,
      quantity: null,
      sku_id: null,
    };

    this.addToCart = this.addToCart.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
  }

  componentDidMount() {
    // const URL = window.location.href;
    // console.log(URL);
    $.ajax({
      url: '/api/cart',
      type: 'GET',
      success: (responseData) => this.setState({ cart: responseData }),
    });
  }

  addToCart() {
    // get cart
    let object = JSON.parse(localStorage.getItem('cart'));
    console.log(object);
    this.currentCart = this.currentCart.push(object);
    const cart = { size: this.state.size, quantity: this.state.quantity };
    console.log(this.currentCart);
    // save cart
    localStorage.setItem('cart', currentCart);
    this.props.getCart();
  }

  addToOutfit(id) {
    const { refreshOutfit } = this.props;
    const string = localStorage.getItem('outfit');
    // console.log('add start:', id, string, string.split(','));

    this.currentOutfit = string.split(',');
    if (this.currentOutfit[0] !== '' && this.currentOutfit.indexOf(id.toString()) === -1) {
      this.currentOutfit.push(id.toString());
      localStorage.setItem('outfit', this.currentOutfit);
      // console.log('add end: ', this.currentOutfit);
    } else {
      localStorage.setItem('outfit', id.toString());
      // console.log('storage empty, added this: ', id.toString());

      refreshOutfit();
    }

    refreshOutfit();
  }

  render() {
    const { data } = this.props;
    const { id } = data.product;
    return (
      <div className="add-to-cart">

        <select
          className="select-size"
          onChange={(e) => {
            const size = JSON.parse(e.target.value).size;
            const quantity = JSON.parse(e.target.value).quantity;
            this.setState({
              size,
              size_num: quantity,
            });
          }}
        >
          <option className="selection-box-font" value="" disabled selected hidden>select size</option>
          {Func.convertObjToArray(this.props.style.skus).map((item) => (
            <option
              key={item[0]}
              value={JSON.stringify(item[1])}
            >
              {item[1].size}
            </option>
          ))}

        </select>

        <select
          className="select-quantity"
          onChange={(e) => {
            this.setState({
              quantity: e.target.value,
            });
          }}
        >
          <option className="selection-box-font" value="" disabled selected hidden>select quantity</option>

          {Func.renderNum(this.state.size_num).map((item, index) => {
            if (!item) {
              return <option>OUT OF STOCK</option>;
            }
            return (
              <option
                key={index}
                value={item}
              >
                {item}
              </option>
            );
          })}

        </select>
        <br />

        <button
          type="button"
          className="button-bag"
          onClick={this.addToCart}
        >
          Add to Bag
        </button>

        <button
          type="button"
          className="button-outfit"
          onClick={() => { this.addToOutfit(id); }}
        >
          Outfit
        </button>

      </div>

    );
  }
};

export default AddToCart;
