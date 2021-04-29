
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import AnswerRenderer from './AnswerRenderer.jsx';
import styles from './styles.js';
import QuestionHelpfulPost from './APIHandlers/QuestionHelpfulPost';
import QuestionReport from './APIHandlers/QuestionReport';
import AnswerModal from './Modals/NewAnswer.jsx';

class QuestionRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_helpfulness: this.props.question.question_helpfulness,
      showAnswerCreate: false,
      questionReport: 'Report',
    };
  }

  QuestionHelpful() {
    QuestionHelpfulPost(this.props.question.question_id, () => {
      let currentHelpfulness = this.state.question_helpfulness;
      let question_helpfulness = currentHelpfulness + 1;
      this.setState({ question_helpfulness });
    });
  }

  QuestionReport() {
    QuestionReport(this.props.question.question_id, () => {
      this.setState({ questionReport: 'Reported' });
    });
  }

  toggleModal() {
    const currentView = !this.state.showAnswerCreate;
    this.setState({ showAnswerCreate: currentView });
  }

  render() {
    return (
      <styles.QuestionBlock>
        <styles.QuestionLine>
          <styles.BoldedText>
            <styles.QuestionText data-testid="QuestionText">
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
              {this.state.question_helpfulness}
              ) |
              {' '}
              <styles.HyperLink onClick={this.toggleModal.bind(this)}>Add Answer</styles.HyperLink>
              {'  |  '}
              <styles.HyperLink
                onClick={this.QuestionReport.bind(this)}
              >
                {this.state.questionReport}
              </styles.HyperLink>
            </div>
          </styles.QuestionSubtitle>
        </styles.QuestionLine>
        <styles.AnswerBlock>
          <AnswerRenderer answers={this.props.question.answers} key={Math.random() * 1000000} />
        </styles.AnswerBlock>
        <AnswerModal
          show={this.state.showAnswerCreate}
          toggleView={this.toggleModal.bind(this)}
          productInformation={this.props.productInformation}
          questionInformation={this.props.question}
        />
      </styles.QuestionBlock>
    );
  }
}

export default QuestionRenderer;