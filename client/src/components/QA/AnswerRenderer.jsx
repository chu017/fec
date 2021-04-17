import React from 'react';
import styles from "./styles.js"

const AnswerRenderer = (props) => {
  const { answers } = props;
  const answersObject = {
    answererName: [],
    answerBody: [],
    answerDate: [],
  };
  for (let i = 0; i < Object.keys(answers).length; i += 1) {
    const currentAnswer = answers[Object.keys(answers)[i]];
    answersObject.answererName.push(currentAnswer.answerer_name);
    answersObject.answerBody.push(currentAnswer.body);
    answersObject.answerDate.push(currentAnswer.date);
  }

  const parseAnswers = (answerBody, i) => {
    const answerDate = answersObject.answerDate[i];
    const answererName = answersObject.answererName[i];
    return (
      <styles.AnswerText>
        {answerBody}
        {' '}
        {answerDate}
        {' '}
        {answererName}
      </styles.AnswerText>
    );
  };
  return (
    <div>
      {answersObject.answerBody.map((answerBody, i) => parseAnswers(answerBody, i))}
    </div>
  );
};

export default AnswerRenderer;
