import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import styles from "./styles.js"


const QuestionRenderer = (props) => (
  <styles.QuestionBlock>
    <styles.QuestionText>
      Q:
      {' '}
      {props.question.question_body}
    </styles.QuestionText>
    <styles.AnswerBlock>
      <AnswerRenderer answers={props.question.answers} />
    </styles.AnswerBlock>
  </styles.QuestionBlock>
);

export default QuestionRenderer;
