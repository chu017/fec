const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const questionAdd = (req, res) => {
  axios({
    method: 'post',
    data: req.body,
    url: `${baseURL}/qa/questions`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

const answerAdd = (req, res) => {
  const questionID = req.params.question_id;
  axios({
    method: 'post',
    data: req.body,
    url: `${baseURL}/qa/questions/${questionID}/answers`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

const reviewAdd = (req, res) => {
  axios({
    method: 'post',
    data: req.body,
    url: `${baseURL}/reviews`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

module.exports.questionAdd = questionAdd;
module.exports.answerAdd = answerAdd;
module.exports.reviewAdd = reviewAdd;