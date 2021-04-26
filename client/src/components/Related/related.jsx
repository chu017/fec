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
    const { data, outfitData, refreshOutfit } = this.props;
    console.log(outfitData);
    return (
      <div id="related">
        <Carousel
          data={data}
          outfitData={outfitData}
          refreshOutfit={refreshOutfit}
        />
      </div>
    );
  }
}

export default Related;
