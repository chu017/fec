const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const outfitHandler = (outfitIDs, errorCB, successCB) => {
  const outfitData = {};
  outfitData.outfit={}
  const outfitInformationRequests = outfitIDs.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}`,
    headers: { Authorization: API_KEY },
  }));
  axios.all(outfitInformationRequests)
    .then((response) => {
      outfitData.outfit.outfitInformation = [];
      for (let i = 0; i < response.length; i += 1) {
        outfitData.outfit.outfitInformation.push(response[i].data);
      }
      const outfitStyleRequests = outfitIDs.map((id) => axios({
        method: 'get',
        url: `${baseURL}/products/${id}/styles`,
        headers: { Authorization: API_KEY },
      }));
      return axios.all(outfitStyleRequests);
    })
    .then((response) => {
      outfitData.outfit.outfitStyles = [];
      for (let i = 0; i < response.length; i += 1) {
        outfitData.outfit.outfitStyles.push(response[i].data);
      }
      const outfitReviewRequests = outfitIDs.map((id) => axios({
        method: 'get',
        url: `${baseURL}/reviews?product_id=${id}&sort=newest&count=100&page=1`,
        headers: { Authorization: API_KEY },
      }));
      return axios.all(outfitReviewRequests);
    })
    .then((response) => {
      outfitData.outfit.outfitReviews = [];
      for (let i = 0; i < response.length; i += 1) {
        outfitData.outfit.outfitReviews.push(response[i].data);
      }
      successCB(outfitData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = outfitHandler;
