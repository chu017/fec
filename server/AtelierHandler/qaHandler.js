const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const reviewHandler = (productID, errorCB, successCB) => {
  const productData = {};
  axios({
    method: 'get',
    url: `${baseURL}/qa/questions?product_id=${productID}&count=100&page=1`,
    headers: { Authorization: API_KEY },
  })
    .then((response) => {
      productData.qa = response.data;
      successCB(productData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = reviewHandler;
