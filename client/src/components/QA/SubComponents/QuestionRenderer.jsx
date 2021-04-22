/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import styles from './styles.js';
import QuestionHelpfulPost from './APIHandlers/QuestionHelpfulPost'
<<<<<<< HEAD
import QuestionReport from './APIHandlers/QuestionReport'
=======

>>>>>>> Add Non-Functioning Helpfulness Handling

class QuestionRenderer extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      question_helpfulness: this.props.question.question_helpfulness,
    };
  }

  QuestionHelpful() {
    QuestionHelpfulPost(this.props.question.question_id, () => {
      let currentHelpfulness = this.state.question_helpfulness;
      let question_helpfulness = currentHelpfulness + 1;
      this.setState({question_helpfulness});
    });
  }

  QuestionReport() {
    QuestionReport(this.props.question.question_id);
  }
=======
    this.state = {};
  }

  QuestionHelpful (event) {
    QuestionHelpfulPost(this.props.question.question_id);
  };
>>>>>>> Add Non-Functioning Helpfulness Handling

  render() {
    return (
      <styles.QuestionBlock>
        <styles.QuestionLine>
          <styles.BoldedText>
<<<<<<< HEAD
<<<<<<< HEAD
            <styles.QuestionText data-testid="QuestionText">
=======
            <styles.QuestionText>
>>>>>>> Add Non-Functioning Helpfulness Handling
=======
            <styles.QuestionText data-testid="QuestionText">
>>>>>>> Write Initial Testing for Q&A
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
<<<<<<< HEAD
              {this.state.question_helpfulness}
              ) |
              {' '}
              <styles.HyperLink>Add Answer</styles.HyperLink>
              {'  |  '}
              <styles.HyperLink onClick={this.QuestionReport.bind(this)}>Report</styles.HyperLink>
=======
              {this.props.question.question_helpfulness}
              ) |
              {' '}
              <styles.HyperLink href="http://google.com">Add Answer</styles.HyperLink>
>>>>>>> Add Non-Functioning Helpfulness Handling
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
