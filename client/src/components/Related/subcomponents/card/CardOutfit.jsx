/* eslint-disable react/prop-types */
import React from 'react';
<<<<<<< HEAD
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const CardOutfit = ({
  name, category, price, image,
}) => (
  <styles.cardComponentDiv>

    <span>{name}</span>
    <button id="starButton" type="button">Remove From Outfit</button>
    <br />

    <styles.cardImg src={image} alt="" />
    <br />

    <span>{category}</span>
    <br />

    <span>{price}</span>
  </styles.cardComponentDiv>
=======

const CardOutfit = ({ name, category, price, image }) => (
  <div className="cardComponent">
    <span>{name}</span>
    <br />
    <img src={image} alt="" />
    <br />
    <span>{category}</span>
    <br />
    <span>{price}</span>
  </div>
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
);

export default CardOutfit;
