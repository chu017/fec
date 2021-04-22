
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const Card = ({
  name, category, price, image, toggleModal,
}) => (

  <styles.cardComponentDiv>

    <span>{name}</span>
    <button id="starButton" type="button" onClick={() => { toggleModal(); }}>STAR</button>
    <br />

    <styles.cardImg src={image} alt="" />
    <br />

    <span>{category}</span>
    <br />

    <span>{price}</span>
  </styles.cardComponentDiv>
);

export default Card;
