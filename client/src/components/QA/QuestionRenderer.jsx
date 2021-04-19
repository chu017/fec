import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import styles from "./styles.js"


const QuestionRenderer = (props) => (
  <styles.QuestionBlock>
<<<<<<< HEAD
    <styles.QuestionText>
      Q:
      {' '}
      {props.question.question_body}
    </styles.QuestionText>
=======
    <styles.QuestionLine>
      <styles.BoldedText>
        <styles.QuestionText>
          Q:
          {' '}
          {props.question.question_body}
        </styles.QuestionText>
      </styles.BoldedText>
      <styles.QuestionSubtitle>
        <div>
          Helpful?
          {' '}
          <styles.HyperLink href="http://google.com">
            Yes
          </styles.HyperLink>
          {' '}
          (
          {props.question.question_helpfulness}
          ) |
          {' '}
          <styles.HyperLink href="http://google.com">Add Answer</styles.HyperLink>
        </div>
      </styles.QuestionSubtitle>
    </styles.QuestionLine>
>>>>>>> Add Answer Helpfulness & Improve CSS Styling Reusability
    <styles.AnswerBlock>
      <AnswerRenderer answers={props.question.answers} />
    </styles.AnswerBlock>
  </styles.QuestionBlock>
);

export default QuestionRenderer;
