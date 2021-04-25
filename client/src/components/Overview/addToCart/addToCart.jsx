/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';

const AddToCart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'S',
      quantity: 1,
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
            this.setState({
              size: e.target.value,
            });
          }}
        >
          <option value="" disabled selected hidden>select size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
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
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
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
