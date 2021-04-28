const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const interactionHandler = (data, errorCB, successCB) => {
  axios({
    method: 'post',
    url: `${baseURL}/interactions`,
    headers: { Authorization: API_KEY },
    data,
  })
    .then((responseData) => successCB(responseData))
    .catch((responseData) => errorCB(responseData));
};

module.exports = interactionHandler;
