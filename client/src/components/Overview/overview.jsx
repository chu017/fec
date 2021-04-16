import React from 'react';

const Overview = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div>{this.props.data.product.id}</div>;
  }
};

export default Overview;
