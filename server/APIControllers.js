const resourceHandler = require ('./AtelierHandler/resourceHandler.js');
const outfitHandler = require('./AtelierHandler/outfitHandler.js');
const helpfulReportHandler = require('./AtelierHandler/helpfulReportHandler');

module.exports.resourceHandler = resourceHandler;
module.exports.outfitHandler = outfitHandler;
module.exports.questionHelpful = helpfulReportHandler.questionHelpful;
module.exports.answerHelpful = helpfulReportHandler.answerHelpful;
module.exports.reviewHelpful = helpfulReportHandler.reviewHelpful;
module.exports.questionReport = helpfulReportHandler.questionReport;
module.exports.answerReport = helpfulReportHandler.answerReport;
module.exports.reviewReport = helpfulReportHandler.reviewReport;
