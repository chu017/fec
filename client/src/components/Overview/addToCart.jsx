import React from 'react';

const AddToCart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h4>Add to Cart</h4>
        <input type="input" />
        <input type="input" />
        <br />
        <button type="button">Add to Cart</button>
        <button type="button">Outfit</button>
      </div>

    );
  }
};

export default AddToCart;