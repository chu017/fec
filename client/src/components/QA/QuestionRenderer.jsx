/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import styles from './styles.js';

const QuestionRenderer = (props) => (
  <styles.QuestionBlock>
    <styles.QuestionLine>
      <styles.QuestionText>
        Q:
        {' '}
        {props.question.question_body}
        {console.log(props)}
      </styles.QuestionText>
      <div>Helpful? Yes(25) | Add Answer</div>
    </styles.QuestionLine>
    <styles.AnswerBlock>
      <AnswerRenderer answers={props.question.answers} />
    </styles.AnswerBlock>
  </styles.QuestionBlock>
);

export default QuestionRenderer;
