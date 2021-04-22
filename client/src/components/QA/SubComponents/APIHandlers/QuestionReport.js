const QuestionReport = (questionID) => {
  $.ajax({
    url: `/qa/questions/${questionID}/report`,
    type: 'PUT',
    success: (data) => cb(data)
 });
};

export default QuestionReport;
