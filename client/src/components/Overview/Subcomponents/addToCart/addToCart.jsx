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
import AddCart from '../APIHandlers/addCart.js';

const AddToCart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'XS',
      size_num: 8,
      skuID: null,
      quantity: null,
      style_id: null,
    };

    this.addToCart = this.addToCart.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
  }

  addToCart(id) {
    // get cart
    const { skuID } = this.state;
    this.setState({ style_id: this.props.style.style_id });
    const { getCart } = this.props;
    let string = localStorage.getItem('cart');
    console.log('current cart: ', string);
    // save cart
    if (string === null) {
      localStorage.setItem('cart', id.toString());
    } else {
      this.currentCart = string.split(',');
      if (this.currentCart.indexOf(id.toString()) === -1) {
        this.currentCart.push(id.toString());
        localStorage.setItem('cart', this.currentCart);
      } else {
        localStorage.setItem('cart', id.toString());

        AddCart(skuID, () => {});
        // this.props.getCart(skuID);
      }
    }
    // this.getCart();
  }

  addToOutfit(id) {
    const { refreshOutfit } = this.props;
    const string = localStorage.getItem('outfit');
    if (string === null) {
      localStorage.setItem('outfit', id.toString());
    } else {
      this.currentOutfit = string.split(',');
      if (this.currentOutfit[0] !== '' && this.currentOutfit.indexOf(id.toString()) === -1) {
        this.currentOutfit.push(id.toString());
        localStorage.setItem('outfit', this.currentOutfit);
        refreshOutfit();
      } else {
        localStorage.setItem('outfit', id.toString());
      }
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
            const skuID = JSON.parse(e.target.value)[0];
            const size = JSON.parse(e.target.value)[1].size;
            const quantity = JSON.parse(e.target.value)[1].quantity;
            this.setState({
              size,
              size_num: quantity,
              skuID,
            });
          }}
        >
          <option className="selection-box-font" value="" disabled selected hidden>select size</option>
          {Func.convertObjToArray(this.props.style.skus).map((item) => (
            <option
              key={item[0]}
              value={JSON.stringify(item)}
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
          onClick={() => { this.addToCart(id); }}
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

/*
          {Func.convertObjToArray(this.props.style.skus).map((item) => {
            console.log(item);
            return (
              <option
                key={item[0]}
                value={JSON.stringify(item)}
                // value={JSON.stringify(item[1])}
              >
                {item[1].size}
              </option>
            );
          })}
*/
