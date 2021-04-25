/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

class FirstOutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { overviewProduct, image } = this.props;
    return (
      <styles.outfitCardComponentDiv>
        Click here to add
        {' '}
        {overviewProduct}
        {' '}
        to your Outfit.
        <styles.cardImg src={image} alt="" />
        <br />
      </styles.outfitCardComponentDiv>
    );
  }
}
export default FirstOutfitCard;
