/* eslint-disable react/prop-types */
import React from 'react';

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
);

export default CardOutfit;
