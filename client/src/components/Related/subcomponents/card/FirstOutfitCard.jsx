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
    let string = localStorage.getItem('outfit');
    console.log(JSON.parse(string));
    this.currentOutfit = JSON.parse(string);
    if (this.currentOutfit === null) {
      this.currentOutfit = [];
    }
    if (this.currentOutfit.indexOf(id) === -1) {
      this.currentOutfit.push(id);
      localStorage.setItem('outfit', JSON.stringify(this.currentOutfit));
    }
    console.log(this.currentOutfit);
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
