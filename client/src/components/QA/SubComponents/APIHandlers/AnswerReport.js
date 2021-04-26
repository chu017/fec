const AnswerReport = (answerID, callback) => {
  $.ajax({
    url: `/qa/answers/${answerID}/report`,
    type: 'PUT',
    success: (data) => callback(data)
 });
};

export default AnswerReport;

