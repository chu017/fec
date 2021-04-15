import React from 'react';
import ReactDOM from 'react-dom';

class Overview extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {

    return(
      <div>
      <h1>Hellow World from Overview</h1>
      <h3>{this.props.data.product.id}</h3>
      </div>
    )
  }
}

export default Overview;