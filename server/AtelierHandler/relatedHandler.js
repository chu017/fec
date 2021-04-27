const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const informationHandler = (productID, errorCB, successCB) => {
  const productData = {};
  axios({
    method: 'get',
    url: `${baseURL}/products/${productID}/related`,
    headers: { Authorization: API_KEY },
  })
    .then((response) => {
      productData.related = {};
      productData.related.relatedIds = response.data;
      const relatedInformationRequests = productData.related.relatedIds.map((id) => axios({
        method: 'get',
        url: `${baseURL}/products/${id}`,
        headers: { Authorization: API_KEY },
      }));
      return axios.all(relatedInformationRequests);
    })
    .then((response) => {
      productData.related.relatedInformation = [];
      for (let i = 0; i < response.length; i += 1) {
        productData.related.relatedInformation.push(response[i].data);
      }
      const relatedStyleRequests = productData.related.relatedIds.map((id) => axios({
        method: 'get',
        url: `${baseURL}/products/${id}/styles`,
        headers: { Authorization: API_KEY },
      }));
      return axios.all(relatedStyleRequests);
    })
    .then((response) => {
      productData.related.relatedStyles = [];
      for (let i = 0; i < response.length; i += 1) {
        productData.related.relatedStyles.push(response[i].data);
      }
      const relatedReviewRequests = productData.related.relatedIds.map((id) => axios({
        method: 'get',
        url: `${baseURL}/reviews?product_id=${id}&sort=newest&count=100&page=1`,
        headers: { Authorization: API_KEY },
      }));
      return axios.all(relatedReviewRequests);
    })
    .then((response) => {
      productData.related.relatedReviews = [];
      for (let i = 0; i < response.length; i += 1) {
        productData.related.relatedReviews.push(response[i].data);
      }
      successCB(productData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = informationHandler;
