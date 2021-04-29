const QuestionReport = (questionID, callback) => {
  $.ajax({
    url: `/qa/questions/${questionID}/report`,
    type: 'PUT',
    success: (data) => callback(data),
  });
};

export default QuestionReport;
