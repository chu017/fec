const AnswerReport = (answerID) => {
  $.ajax({
    url: `/qa/answers/${answerID}/report`,
    type: 'PUT',
    success: (data) => console.log(data)
 });
};

export default AnswerReport;

