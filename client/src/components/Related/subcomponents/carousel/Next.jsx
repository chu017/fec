
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

const Next = ({ scroll, className }) => {
  return (
    <styles.nextComponentDiv className={className}>
      <styles.navButtons type="button" onClick={() => { scroll(); }}>{'>'}</styles.navButtons>
    </styles.nextComponentDiv>
  );
};

export default Next;
