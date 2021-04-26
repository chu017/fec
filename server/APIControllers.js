const overviewHandler = require('./AtelierHandler/overviewHandler.js');
const informationHandler = require('./AtelierHandler/informationHandler.js');
const outfitHandler = require('./AtelierHandler/outfitHandler.js');
const helpfulReportHandler = require('./AtelierHandler/helpfulReportHandler');
const addHandler = require('./AtelierHandler/addHandler')

module.exports.overviewHandler = overviewHandler;
module.exports.informationHandler = informationHandler;
module.exports.outfitHandler = outfitHandler;
module.exports.questionHelpful = helpfulReportHandler.questionHelpful;
module.exports.answerHelpful = helpfulReportHandler.answerHelpful;
module.exports.reviewHelpful = helpfulReportHandler.reviewHelpful;
module.exports.questionReport = helpfulReportHandler.questionReport;
module.exports.answerReport = helpfulReportHandler.answerReport;
module.exports.reviewReport = helpfulReportHandler.reviewReport;
module.exports.questionAdd = addHandler.questionAdd;
module.exports.answerAdd = addHandler.answerAdd;
module.exports.reviewAdd = addHandler.reviewAdd;