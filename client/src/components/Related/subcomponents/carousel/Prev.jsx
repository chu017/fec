<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styled.js';

const Prev = ({ scroll, className }) => (
  <styles.prevComponentDiv className={className}>
    <styles.navButtons type="button" onClick={() => { scroll(-348); }}>{'<'}</styles.navButtons>
  </styles.prevComponentDiv>
=======
=======
/* eslint-disable react/prop-types */
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
import React from 'react';
import styles from '../../styled.js';

<<<<<<< HEAD
const Prev = () => (
  <div className="prevComponent">
    <i className="prevArrow" />
    <button type="button">PREV</button>
  </div>
>>>>>>> created subcomponents for carousel
=======
const Prev = ({ scroll }) => (
  <styles.prevComponentDiv>
    <styles.navButtons type="button" onClick={() => { scroll(-300); }}>{'<'}</styles.navButtons>
  </styles.prevComponentDiv>
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
);

export default Prev;
