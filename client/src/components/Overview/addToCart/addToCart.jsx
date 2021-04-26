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
      quantity: 1,
      item: 8,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const outfit = this.props.outfit;
    localStorage.setItem('outfit', JSON.stringify(outfit));
    this.props.getOutfit();
  }

  render() {
    return (
      <div className="add-to-cart">

        <select
          className="select-size"
          onChange={(e) => {
            // console.log(e.target.value);
            this.setState({
              size: e.target.value,
            });
          }}
        >
          <option value="" disabled selected hidden>select size</option>

          {Func.convertObjToArray(this.props.style.skus).map((item, index) => (
            <option
              key={index}
              value={item.size}
            >
              {item.size}
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
          <option value="" disabled selected hidden>select quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>

        </select>
        <br />

        <button
          type="button"
          className="button-bag"
        >
          Add to Bag
        </button>

        <button
          type="button"
          className="button-outfit"
          onClick={this.handleSubmit}
        >
          Outfit
        </button>

      </div>

    );
  }
};

export default AddToCart;
