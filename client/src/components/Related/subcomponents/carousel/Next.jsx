/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

const Next = ({ scroll }) => (
  <styles.nextComponentDiv>
    <styles.navButtons type="button" onClick={() => { scroll(300); }}>{'>'}</styles.navButtons>
  </styles.nextComponentDiv>
);

export default Next;
