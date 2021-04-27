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
            const size = JSON.parse(e.target.value).size;
            const quantity = JSON.parse(e.target.value).quantity;
            this.setState({
              size,
              size_num: quantity,
            });
          }}
        >
          <option value="" disabled selected hidden>select size</option>
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
          <option value="" disabled selected hidden>select quantity</option>

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
