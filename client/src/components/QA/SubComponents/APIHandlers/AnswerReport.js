const AnswerReport = (answerID) => {
  $.ajax({
    url: `/qa/answers/${answerID}/report`,
    type: 'PUT',
    success: (data) => cb(data)
 });
};

export default AnswerReport;

