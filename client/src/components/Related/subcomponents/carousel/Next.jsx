<<<<<<< HEAD
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
=======
/* eslint-disable react/prop-types */
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
import React from 'react';
import styles from '../../styled.js';

<<<<<<< HEAD
const Next = () => (
  <div className="nextComponent">
    <i className="nextArrow" />
    <button type="button">NEXT</button>
  </div>
>>>>>>> created subcomponents for carousel
=======
const Next = ({ scroll }) => (
  <styles.nextComponentDiv>
    <styles.navButtons type="button" onClick={() => { scroll(300); }}>{'>'}</styles.navButtons>
  </styles.nextComponentDiv>
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
);

export default Next;
