/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';

const AddToCart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      size: 1,
      // eslint-disable-next-line react/no-unused-state
      quantity: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const { size, quantity } = this.state;

  handleSubmit() {
    const outfit = this.props.outfit;
    localStorage.setItem('outfit', JSON.stringify(outfit));
    this.props.getOutfit();
  }

  render() {
    return (
      <div className="add-to-cart">
        <div>select size</div>
        <select
          className="select-size"
          onChange={(e) => {
            this.setState({
              // eslint-disable-next-line react/no-unused-state
              size: e.target.value,
            });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select
          className="select-quantity"
          onChange={(e) => {
            this.setState({
              // eslint-disable-next-line react/no-unused-state
              quantity: e.target.value,
            });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
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

/*
    const outfit = { name: 'Super Comfortable', original_price: '140.00', photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      }
      ]
    }
*/
