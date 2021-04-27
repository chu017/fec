/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img" alt="" src={this.props.item.photos[0].url} />
        <h2>{this.props.item.name}</h2>
        <div>{this.props.item.original_price}</div>
      </div>
    );
  }
}

export default Card;
