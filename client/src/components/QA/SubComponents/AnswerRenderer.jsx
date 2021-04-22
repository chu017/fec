/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from './styles.js';

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
    };
    for (let i = 0; i < Object.keys(answers).length; i += 1) {
      const currentAnswer = answers[Object.keys(answers)[i]];
      this.answersObject.answererName.push(currentAnswer.answerer_name);
      this.answersObject.answerBody.push(currentAnswer.body);
      this.answersObject.answerDate.push(currentAnswer.date);
      this.answersObject.answerHelpfulness.push(currentAnswer.helpfulness);
      this.answersObject.answerID.push(currentAnswer.id);
    }
    this.state = {
      showAllAnswers: false,
    };
  }

  parseAnswers(answerBody, i) {
    const answerDate = this.answersObject.answerDate[i];
    const answererName = this.answersObject.answererName[i];
    const answerHelpfulness = this.answersObject.answerHelpfulness[i];
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
          <styles.HyperLink>Yes</styles.HyperLink>
          {' '}
          (
          {answerHelpfulness}
          )
          {'  |  '}
          <styles.HyperLink>Report</styles.HyperLink>
        </styles.AnswerSubtitle>
      </div>
    );
  }

  showAllAnswers() {
    this.setState({ showAllAnswers: true });
  }

  render() {
    if (this.state.showAllAnswers === true) {
      return (
        <div>
          {this.answersObject.answerBody.map((answerBody, i) => this.parseAnswers(answerBody, i))}
        </div>
      );
    }
    if (this.answersObject.answerBody.length > 0) {
      return (
        <div>
          {this.answersObject.answerBody.slice(0, 2).map((answerBody, i) => this.parseAnswers(answerBody, i))}
          <styles.LoadMoreAnswers onClick={this.showAllAnswers.bind(this)} data-testid="LoadMoreAnswers">LOAD MORE ANSWERS</styles.LoadMoreAnswers>
        </div>
      );
    }
    if (this.answersObject.answerBody.length === 0) {
      return (
        <styles.AnswerText data-testid="NoAnswer">No Answers Available for this Question.</styles.AnswerText>
      );
    }
  }
}

export default AnswerRenderer;
