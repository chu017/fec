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
    this.answersObject = {
      answererName: [],
      answerBody: [],
      answerDate: [],
      answerHelpfulness: [],
      answerID: [],
      answerReport: [],
    };
    for (let i = 0; i < Object.keys(answers).length; i += 1) {
      const currentAnswer = answers[Object.keys(answers)[i]];
      this.answersObject.answererName.push(currentAnswer.answerer_name);
      this.answersObject.answerBody.push(currentAnswer.body);
      this.answersObject.answerDate.push(currentAnswer.date);
      this.answersObject.answerHelpfulness.push(currentAnswer.helpfulness);
      this.answersObject.answerID.push(currentAnswer.id);
      this.answersObject.answerReport.push('Report');
    }
    this.state = {
      answersObject: this.answersObject,
      showAllAnswers: false,
    };
  }

  AnswerHelpful(answerID, identifier) {
    AnswerHelpfulPost(answerID, () => {
      const { answersObject } = this.state;
      const currentHelpfulness = answersObject.answerHelpfulness[identifier];
      answersObject.answerHelpfulness[identifier] = currentHelpfulness + 1;
      this.setState({ answersObject });
    });
  }

  AnswerReport(answerID, identifier) {
    AnswerReport(answerID, () => {
      const { answersObject } = this.state;
      answersObject.answerReport[identifier] = 'Reported';
      this.setState({ answersObject });
    });
  }

  parseAnswers(answerBody, i) {
    const answerDate = this.state.answersObject.answerDate[i];
    const answererName = this.state.answersObject.answererName[i];
    const answerHelpfulness = this.state.answersObject.answerHelpfulness[i];
    return (
      <div key={Math.random() * 100000}>
        <styles.AnswerText data-testid="AnswerText">
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
          <styles.HyperLink onClick={() => this.AnswerHelpful.bind(this)(this.state.answersObject.answerID[i], i)}>
            Yes
          </styles.HyperLink>
          {' '}
          (
          {answerHelpfulness}
          )
          {'  |  '}
          <styles.HyperLink onClick={() => this.AnswerReport.bind(this)(this.state.answersObject.answerID[i], i)}>{this.state.answersObject.answerReport[i]}</styles.HyperLink>
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
              {this.state.answersObject.answerBody.map(
                (answerBody, i) => this.parseAnswers(answerBody, i),
              )}
            </div>
          )
          : (
            <div>
              {this.state.answersObject.answerBody.slice(0, 2).map(
                (answerBody, i) => this.parseAnswers(answerBody, i),
              )}
            </div>
          )}
        { this.state.showAllAnswers || this.state.answersObject.answerBody.length < 3
          ? <div />
          : <styles.LoadMoreAnswers onClick={this.showAllAnswers.bind(this)} data-testid="LoadMoreAnswers">LOAD MORE ANSWERS</styles.LoadMoreAnswers>}
        {this.state.answersObject.answerBody.length === 0
          ? <styles.AnswerText data-testid="NoAnswer"> No Answers Available for this Question.</styles.AnswerText>
          : <div />}
      </div>
    );
  }
}

export default AnswerRenderer;
