const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const cartHandler = (req, errorCB, successCB) => {
  const cartData = {};
  // console.log(req.body.cartIDs);
  const { cartIDs } = req.body;
  const cartID = cartIDs.split(',');
  let infoLength = 0;
  let styleLength = 0;
  cartData.cart = {};
  const cartInformationRequests = cartID.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}`,
    headers: { Authorization: API_KEY },
  }));
  const cartStyleRequests = cartID.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}/styles`,
    headers: { Authorization: API_KEY },
  }));
  infoLength = cartInformationRequests.length;
  styleLength = cartStyleRequests.length;
  axios.all(cartInformationRequests.concat(cartStyleRequests))
    .then((response) => {
      // console.log("initial response: ", response);
      cartData.cart.cartInformation = [];
      cartData.cart.cartStyles = [];
      for (let i = 0; i < infoLength; i += 1) {
        // console.log("first loop: ", response[i].data);
        cartData.cart.cartInformation.push(response[i].data);
      }
      for (let i = infoLength; i < infoLength + styleLength; i += 1) {
        // console.log("second loop: ", response[i].data);
        cartData.cart.cartStyles.push(response[i].data);
      }
      console.log("final data: ", cartData);
      successCB(cartData);
    })
    .catch((response) => {
      errorCB(response);
    });

  // axios({
  //   method: 'get',
  //   url: `${baseURL}/cart`,
  //   headers: { Authorization: API_KEY },
  // })
  //   .then((response) => {
  //     console.log(response);
  //     productData.cart = response.data;
  //     successCB(productData);
  //   })
  //   .catch((response) => {
  //     errorCB(response);
  //   });
};

module.exports = cartHandler;
