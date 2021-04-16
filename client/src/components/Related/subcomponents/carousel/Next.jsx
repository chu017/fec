<<<<<<< HEAD
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

const Next = ({ scroll, className }) => (
  <styles.nextComponentDiv className={className}>
    <styles.navButtons type="button" onClick={() => { scroll(348); }}>{'>'}</styles.navButtons>
  </styles.nextComponentDiv>
=======
import React from 'react';

const Next = () => (
  <div className="nextComponent">
    <i className="nextArrow" />
    <button type="button">NEXT</button>
  </div>
>>>>>>> created subcomponents for carousel
);

export default Next;
