const AnswerHelpfulPost = (answerID) => {
  $.ajax({
    url: `/qa/answers/${answerID}/helpful`,
    type: 'PUT',
    success: (data) => console.log(data)
 });
};

export default AnswerHelpfulPost;

