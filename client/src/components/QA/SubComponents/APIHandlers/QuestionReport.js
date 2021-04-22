const QuestionReport = (questionID) => {
  $.ajax({
    url: `/qa/questions/${questionID}/report`,
    type: 'PUT',
    success: (data) => console.log(data)
 });
};

export default QuestionReport;
