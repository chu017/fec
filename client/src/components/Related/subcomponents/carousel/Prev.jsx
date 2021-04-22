/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

const Prev = ({ scroll, className }) => (
  <styles.prevComponentDiv className={className}>
    <styles.navButtons type="button" onClick={() => { scroll(-348); }}>{'<'}</styles.navButtons>
  </styles.prevComponentDiv>
);

export default Prev;