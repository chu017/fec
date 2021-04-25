/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';
import ModalCompare from './ModalCompare.jsx';

class CardStateful extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.sortModalData = this.sortModalData.bind(this);

    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount() {
    this.sortModalData();
  }

  toggleModal() {
    const { modalVisible } = this.state;
    if (modalVisible === true) {
      this.setState({ modalVisible: false });
    } else {
      this.setState({ modalVisible: true });
    }
  }

  sortModalData() {
    const {
      overviewFeatures,
      cardProductFeatures,
    } = this.props;

    console.log(overviewFeatures, cardProductFeatures);

    const dataForTable = [];

    overviewFeatures.forEach((item) => {
      dataForTable.push({ featureToCompare: item.feature, overviewValue: item.value });
    });

    for (let i = 0; i < dataForTable.length; i += 1) {
      cardProductFeatures.forEach((cardItem) => {
        if (cardItem.feature === dataForTable[i].featureToCompare) {
          dataForTable[i].cardValue = cardItem.value;
        } else if (cardItem.feature !== dataForTable[i].feature) {
          dataForTable.push({ featureToCompare: cardItem.feature, cardValue: cardItem.value });
        }
      });
    }
    // cardProductFeatures.forEach((cardItem) => {

    // });
  }

  render() {
    const {
      name,
      category,
      defaultPrice,
      salePrice,
      image,
      cardProductFeatures,
      overviewFeatures,
    } = this.props;
    const { modalVisible } = this.state;
    return (
      <styles.cardComponentDiv>
        <button id="starButton" type="button" onClick={() => { this.toggleModal(); }}>STAR</button>
        <br />

        <span>{name}</span>

        <styles.cardImg src={image} alt="" />
        <br />

        <span>{category}</span>
        <br />

        {salePrice ? (
          <div>
            <styles.salePrice>{salePrice}</styles.salePrice>
            <styles.defaultPriceStrike>{defaultPrice}</styles.defaultPriceStrike>
          </div>
        ) : <span>{defaultPrice}</span>}

        { modalVisible ? (
          <ModalCompare
            toggleModal={this.toggleModal}
            cardProductFeatures={cardProductFeatures}
            overviewFeatures={overviewFeatures}
          />
        ) : null}
      </styles.cardComponentDiv>
    );
  }
}
export default CardStateful;
