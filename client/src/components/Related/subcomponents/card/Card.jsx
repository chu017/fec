<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const Card = ({
  name, category, price, image, toggleModal,
}) => (

  <styles.cardComponentDiv>

    <span>{name}</span>
    <button id="starButton" type="button" onClick={() => { toggleModal(); }}>STAR</button>
    <br />

    <styles.cardImg src={image} alt="" />
    <br />

    <span>{category}</span>
    <br />

    <span>{price}</span>
  </styles.cardComponentDiv>
=======
=======
/* eslint-disable react/prop-types */
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const Card = ({
  name, category, price, image, toggleModal,
}) => (
  <styles.cardComponentDiv>

    <span>{name}</span>
    <button id="starButton" type="button" onClick={() => { toggleModal(); }}>STAR</button>
    <br />

    <styles.cardImg src={image} alt="" />
    <br />
<<<<<<< HEAD
    <span>PRICE</span>
  </div>
>>>>>>> created subcomponents for carousel
=======

    <span>{category}</span>
    <br />

    <span>{price}</span>
  </styles.cardComponentDiv>
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
);

export default Card;
