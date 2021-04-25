/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../../styled.js';

const NextOutfit = ({ scroll, className }) => (
  <styles.nextComponentDiv className={className}>
    <styles.navOutfitButtons type="button" onClick={() => { scroll(); }}>{'>'}</styles.navOutfitButtons>
  </styles.nextComponentDiv>
);

export default NextOutfit;
