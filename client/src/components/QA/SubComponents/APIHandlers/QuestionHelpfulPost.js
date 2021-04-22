const QuestionHelpfulPost = (questionID, cb) => {
  $.ajax({
    url: `/qa/questions/${questionID}/helpful`,
    type: 'PUT',
    success: (data) => cb(data),
    error: (data) => cb(data)
 });
};

export default QuestionHelpfulPost;