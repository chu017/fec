const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const resourceHandler = (productID, errorCB, successCB) => {
  const productData = {};
  axios({
    method: 'get',
    url: `${baseURL}/products/${productID}`,
    headers: { Authorization: API_KEY },
  })
    .then((response) => {
      productData.product = response.data;
      return axios({
        method: 'get',
        url: `${baseURL}/products/${productID}/styles`,
        headers: { Authorization: API_KEY },
      });
    })
    .then((response) => {
      productData.styles = response.data;
      return axios({
        method: 'get',
        url: `${baseURL}/products/${productID}/related`,
        headers: { Authorization: API_KEY },
      });
    })
    .then((response) => {
      productData.related = {};
      productData.related.relatedIds = response.data;
      /* Creating Multiple Axios Requests for Related Information */
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
      return axios({
        method: 'get',
        url: `${baseURL}/reviews?product_id=${productID}&sort=newest&count=100&page=1`,
        headers: { Authorization: API_KEY },
      });
    })
    .then((response) => {
      productData.reviews = {};
      productData.reviews.reviews = response.data;
      return axios({
        method: 'get',
        url: `${baseURL}/reviews/meta?product_id=${productID}`,
        headers: { Authorization: API_KEY },
      });
    })
    .then((response) => {
      productData.reviews.reviewMeta = response.data;
      return axios({
        method: 'get',
        url: `${baseURL}/qa/questions?product_id=${productID}&count=100&page=1`,
        headers: { Authorization: API_KEY },
      });
    })
    .then((response) => {
      productData.qa = response.data;
      successCB(productData);
    })
    .catch((response) => {
      errorCB(response);
    })
};

module.exports = resourceHandler;
