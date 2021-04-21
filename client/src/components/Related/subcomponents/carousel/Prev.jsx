/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

const Prev = ({ scroll }) => (
  <styles.prevComponentDiv>
    <styles.navButtons type="button" onClick={() => { scroll(-300); }}>{'<'}</styles.navButtons>
  </styles.prevComponentDiv>
);

export default Prev;
