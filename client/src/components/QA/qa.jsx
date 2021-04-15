import React from 'react';
import ReactDOM from 'react-dom';

class QA extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      qa: this.props.data.qa,
      reviews: this.props.data.reviews
    }
  }
  render () {
    return (
      <div>Hello World from QA!</div>
    )
  }
}

export default QA;