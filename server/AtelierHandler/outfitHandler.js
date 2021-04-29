const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const outfitHandler = (outfitIDs, errorCB, successCB) => {
  const outfitData = {};
  let infoLength = 0;
  let styleLength = 0;
  let reviewLength = 0;
  outfitData.outfit = {};
  const outfitInformationRequests = outfitIDs.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}`,
    headers: { Authorization: API_KEY },
  }));
  const outfitStyleRequests = outfitIDs.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}/styles`,
    headers: { Authorization: API_KEY },
  }));
  const outfitReviewRequests = outfitIDs.map((id) => axios({
    method: 'get',
    url: `${baseURL}/reviews?product_id=${id}&sort=newest&count=100&page=1`,
    headers: { Authorization: API_KEY },
  }));
  infoLength = outfitInformationRequests.length;
  styleLength = outfitStyleRequests.length;
  reviewLength = outfitReviewRequests.length;
  axios.all(outfitInformationRequests.concat(outfitStyleRequests, outfitReviewRequests))
    .then((response) => {
      outfitData.outfit.outfitInformation = [];
      outfitData.outfit.outfitStyles = [];
      outfitData.outfit.outfitReviews = [];
      for (let i = 0; i < infoLength; i += 1) {
        outfitData.outfit.outfitInformation.push(response[i].data);
      }
      for (let i = infoLength; i < infoLength + styleLength; i += 1) {
        outfitData.outfit.outfitStyles.push(response[i].data);
      }
      for (let i = infoLength + styleLength; i < infoLength + styleLength + reviewLength; i += 1) {
        outfitData.outfit.outfitReviews.push(response[i].data);
      }
      successCB(outfitData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = outfitHandler;
