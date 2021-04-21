/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import Carousel from './subcomponents/carousel/Carousel.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div id="related">
        <Carousel
          data={data}
        />
      </div>
    );
  }
}

export default Related;
