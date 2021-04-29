/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../../styled.js';

const PrevOutfit = ({ scroll, className }) => (
  <styles.prevComponentDiv className={className}>
    <styles.navOutfitButtons type="button" onClick={() => { scroll(); }}>{'<'}</styles.navOutfitButtons>
  </styles.prevComponentDiv>
);

export default PrevOutfit;
