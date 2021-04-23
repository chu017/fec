/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">

        {this.props.newItem.map((item, index) => (
          <Card item={item} key={index} />
        ))}

      </div>
    );
  }
}

export default Related;
