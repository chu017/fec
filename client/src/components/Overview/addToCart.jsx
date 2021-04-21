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

        <button type="button" className="button-bag">Add to Bag</button>
        <button type="button" className="button-outfit">Outfit</button>

      </div>

    );
  }
};

export default AddToCart;
