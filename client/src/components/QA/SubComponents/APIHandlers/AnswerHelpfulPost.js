const AnswerHelpfulPost = (answerID, cb) => {
  $.ajax({
    url: `/qa/answers/${answerID}/helpful`,
    type: 'PUT',
    success: (data) => cb(data),
    error: (data) => cb(data)
 });
};

export default AnswerHelpfulPost;

