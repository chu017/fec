<<<<<<< HEAD
const QuestionHelpfulPost = (questionID, cb) => {
  $.ajax({
    url: `/qa/questions/${questionID}/helpful`,
    type: 'PUT',
    success: (data) => cb(data),
 });
=======
const QuestionHelpfulPost = (questionID) => {
  console.log(questionID);
>>>>>>> Add Non-Functioning Helpfulness Handling
};

export default QuestionHelpfulPost;