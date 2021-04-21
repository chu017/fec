/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import styles from './styles.js';
import QuestionHelpfulPost from './APIHandlers/QuestionHelpfulPost'


class QuestionRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  QuestionHelpful (event) {
    QuestionHelpfulPost(this.props.question.question_id);
  };

  render() {
    return (
      <styles.QuestionBlock>
        <styles.QuestionLine>
          <styles.BoldedText>
            <styles.QuestionText>
              Q:
              {' '}
              {this.props.question.question_body}
            </styles.QuestionText>
          </styles.BoldedText>
          <styles.QuestionSubtitle>
            <div>
              Helpful?
              {' '}
              <styles.HyperLink onClick={this.QuestionHelpful.bind(this)}>
                Yes
              </styles.HyperLink>
              {' '}
              (
              {this.props.question.question_helpfulness}
              ) |
              {' '}
              <styles.HyperLink href="http://google.com">Add Answer</styles.HyperLink>
            </div>
          </styles.QuestionSubtitle>
        </styles.QuestionLine>
        <styles.AnswerBlock>
          <AnswerRenderer answers={this.props.question.answers} key={Math.random() * 1000000} />
        </styles.AnswerBlock>
      </styles.QuestionBlock>
    );
  }
}

export default QuestionRenderer;
