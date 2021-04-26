/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from './styles.js';
import AnswerHelpfulPost from './APIHandlers/AnswerHelpfulPost';
import AnswerReport from './APIHandlers/AnswerReport';

const moment = require('moment');

class AnswerRenderer extends React.Component {
  constructor(props) {
    super(props);
    const { answers } = props;
    const answersArray = [];
    for (let i = 0; i < Object.keys(answers).length; i += 1) {
      const currentAnswer = answers[Object.keys(answers)[i]];
      currentAnswer.answerReport = 'Report';
      answersArray.push(currentAnswer);
    }
    answersArray.sort((a, b) => b.helpfulness - a.helpfulness);
    this.state = {
      answersArray,
      showAllAnswers: false,
    };
  }

  AnswerHelpful(answerID, identifier) {
    AnswerHelpfulPost(answerID, () => {
      const { answersArray } = this.state;
      const currentHelpfulness = answersArray[identifier].helpfulness;
      answersArray[identifier].helpfulness = currentHelpfulness + 1;
      this.setState({ answersArray });
    });
  }

  AnswerReport(answerID, identifier) {
    AnswerReport(answerID, () => {
      const { answersArray } = this.state;
      answersArray[identifier].answerReport = 'Reported';
      this.setState({ answersArray });
    });
  }

  parseAnswers(answer, identifier) {
    return (
      <div key={Math.random() * 100000}>
        <styles.AnswerText data-testid="AnswerText">
          <styles.BoldedText>
            A:
            {' '}
          </styles.BoldedText>
          {answer.body}
        </styles.AnswerText>
        <styles.AnswerSubtitle>
          by
          {' '}
          {answer.answerer_name}
          ,
          {' '}
          {moment(answer.date).format('MMMM DD, YYYY')}
          {'  |  '}
          Helpful?
          {' '}
          <styles.HyperLink onClick={
            () => this.AnswerHelpful.bind(this)(answer.id, identifier)
            }
          >
            Yes
          </styles.HyperLink>
          {' '}
          (
          {answer.helpfulness}
          )
          {'  |  '}
          <styles.HyperLink onClick={
            () => this.AnswerReport.bind(this)(answer.id, identifier)
            }
          >
            {answer.answerReport}
          </styles.HyperLink>
        </styles.AnswerSubtitle>
      </div>
    );
  }

  showAllAnswers() {
    this.setState({ showAllAnswers: true });
  }

  render() {
    return (
      <div>
        { this.state.showAllAnswers
          ? (
            <div>
              {this.state.answersArray.map(
                (answer, i) => this.parseAnswers(answer, i),
              )}
            </div>
          )
          : (
            <div>
              {this.state.answersArray.slice(0, 2).map(
                (answer, i) => this.parseAnswers(answer, i),
              )}
            </div>
          )}
        { this.state.showAllAnswers || this.state.answersArray.length < 3
          ? <div />
          : <styles.LoadMoreAnswers onClick={this.showAllAnswers.bind(this)} data-testid="LoadMoreAnswers">LOAD MORE ANSWERS</styles.LoadMoreAnswers>}
        {this.state.answersArray.length === 0
          ? <styles.AnswerText data-testid="NoAnswer"> No Answers Available for this Question.</styles.AnswerText>
          : <div />}
      </div>
    );
  }
}

export default AnswerRenderer;
