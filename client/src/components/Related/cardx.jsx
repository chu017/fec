/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

class Cardx extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img" alt="" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
        <h2>{this.props.item}</h2>
        {/* <div>{this.props.item.results[0].original_price}</div> */}
      </div>
    );
  }
}

export default Cardx;
