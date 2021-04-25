/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';
import ModalCompare from './ModalCompare.jsx';

const Card = ({
  name, category, defaultPrice, salePrice, image, toggleModal, cardProductFeatures, modalVisible,
}) => (
  <styles.cardComponentDiv>
    <button id="starButton" type="button" onClick={() => { toggleModal(); }}>STAR</button>
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

    {modalVisible ? (
      <ModalCompare
        toggleModal={toggleModal}
      />
    ) : null}
  </styles.cardComponentDiv>
);
export default Card;
