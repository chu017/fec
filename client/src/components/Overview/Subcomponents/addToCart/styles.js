/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* for overview / add to cart */
import styled from 'styled-components';

const addToCart = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
`;

// const select_size = styled.div`
//   width: 150px;
//   height: 30px;
//   padding: 2px;
//   margin: 2px;
// `;

// const select_quantity = styled.div`
//   width: 150px;
//   height: 30px;
//   padding: 2px;
//   margin: 2px;
// `;

const button_bag = styled.button`
  width: 220px;
  height: 50px;
  padding: 2px;
  margin: 2px;
  background-color: black;
  color: white;
`;

const button_outfit = styled.button`
  width: 80px;
  height: 50px;
  padding: 2px;
  margin: 2px;
`;

const shoppingContainer = styled.div`
  width: auto;
  max-height:  1000px;
  display: inline-block;
  position: relative;
  left: 350px;
`;

const shopping_button = styled.button`
  display: block;
  margin: 20px;
  width: 50px;
  height: 30px;
`;

const cart = styled.div`
  display: flex;
  top: auto;
  margin: 10px;
  padding: 3px;
  width: 450px;
  height: 200px;
  border: 1px solid black;
  background-color: white;
  text-align: right;
  font-size: small;
`;

const cartImg = styled.img`
  display: block;
  width: 120px;
  height: 200px;
`;

const cartText = styled.div`
  display: block;
  position: absolute;
  text-align: left;
  left: 200px;
  margin: 20px;
`;

const styles = {
  addToCart,
  // select_size,
  // select_quantity,
  button_bag,
  button_outfit,
  shoppingContainer,
  shopping_button,
  cart,
  cartImg,
  cartText,
};

export default styles;
