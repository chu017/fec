const resourceHandler = require ('./AtelierHandler/resourceHandler.js');
const helpfulReportHandler = require('./AtelierHandler/helpfulReportHandler');

module.exports.questionHelpful = helpfulReportHandler.questionHelpful;
module.exports.answerHelpful = helpfulReportHandler.answerHelpful;
module.exports.reviewHelpful = helpfulReportHandler.reviewHelpful;
module.exports.resourceHandler = resourceHandler;
