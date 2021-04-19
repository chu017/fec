import React from 'react';
import styles from "./styles.js"
const moment = require('moment');

const AnswerRenderer = (props) => {
  const { answers } = props;
  const answersObject = {
    answererName: [],
    answerBody: [],
    answerDate: [],
    answerHelpfulness: [],
    answerID: [],
  };
  for (let i = 0; i < Object.keys(answers).length; i += 1) {
    const currentAnswer = answers[Object.keys(answers)[i]];
    answersObject.answererName.push(currentAnswer.answerer_name);
    answersObject.answerBody.push(currentAnswer.body);
    answersObject.answerDate.push(currentAnswer.date);
    answersObject.answerHelpfulness.push(currentAnswer.helpfulness);
    answersObject.answerID.push(currentAnswer.id);
  }

  const parseAnswers = (answerBody, i) => {
    const answerDate = answersObject.answerDate[i];
    const answererName = answersObject.answererName[i];
    const answerHelpfulness = answersObject.answerHelpfulness[i];
    return (
<<<<<<< HEAD
      <styles.AnswerText>
        {answerBody}
        {' '}
        {moment(answerDate).fromNow()}
        {' '}
        {answererName}
      </styles.AnswerText>
=======
      <div>
        <styles.AnswerText>
          <styles.BoldedText>
            A:
            {' '}
          </styles.BoldedText>
          {answerBody}
        </styles.AnswerText>
        <styles.AnswerSubtitle>
          by
          {' '}
          {answererName}
          ,
          {' '}
          {moment(answerDate).fromNow()}
          {'  |  '}
          Helpful?
          {' '}
          <styles.HyperLink href="http://google.com">Yes</styles.HyperLink>
          {' '}
          (
          {answerHelpfulness}
          )
          {'  |  '}
          <styles.HyperLink href="http://google.com">Report</styles.HyperLink>
        </styles.AnswerSubtitle>
      </div>
>>>>>>> Add Answer Helpfulness & Improve CSS Styling Reusability
    );
  };
  return (
    <div>
      {answersObject.answerBody.map((answerBody, i) => parseAnswers(answerBody, i))}
    </div>
  );
};

export default AnswerRenderer;
