const QuestionHelpfulPost = (questionID) => {
  $.ajax({
    url: `/qa/questions/${questionID}/helpful`,
    type: 'PUT',
    success: (data) => console.log(data)
 });
};

export default QuestionHelpfulPost;