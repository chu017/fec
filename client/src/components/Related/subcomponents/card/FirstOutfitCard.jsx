/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

class FirstOutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.addToOutfit = this.addToOutfit.bind(this);

    this.state = {

    };
  }

  addToOutfit(id) {
    const { refreshOutfit } = this.props;
    // eslint-disable-next-line no-undef
    const string = localStorage.getItem('outfit');
    console.log('add start:', string.split(','));
    this.currentOutfit = string.split(',');
    if (this.currentOutfit[0] !== '' && this.currentOutfit.indexOf(id.toString()) === -1) {
      this.currentOutfit.push(id.toString());
      // eslint-disable-next-line no-undef
      localStorage.setItem('outfit', this.currentOutfit);
      console.log('add end: ', this.currentOutfit);
    } else {
      // eslint-disable-next-line no-undef
      localStorage.setItem('outfit', id.toString());
      console.log('storage empty, added this: ', id.toString());
      refreshOutfit();
    }
    refreshOutfit();
  }

  render() {
    const { overviewProduct, image, id } = this.props;
    return (
      <styles.outfitCardComponentDiv>
        <a onClick={() => { this.addToOutfit(id); }}>
          Click here to add
          {' '}
          {overviewProduct}
          {' '}
          to your Outfit.
          <br />
          <i className="fas fa-plus fa-10x" />
          <styles.cardImg src={image} alt="" />
          <br />
        </a>
      </styles.outfitCardComponentDiv>
    );
  }
}
export default FirstOutfitCard;
