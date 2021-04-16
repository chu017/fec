import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';

const QuestionRenderer = (props) => (
  <div>
    <div>
      Q:
      {' '}
      {props.question.question_body}
    </div>
    <div>
      <AnswerRenderer answers={props.question.answers} />
    </div>
  </div>
);

export default QuestionRenderer;
