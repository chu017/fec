const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const questionHelpful = (req, res) => {
  const questionID = req.params.question_id;
  axios({
    method: 'put',
    url: `${baseURL}/qa/questions/${questionID}/helpful`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

module.exports.questionHelpful = questionHelpful;
