/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import styles from './styles.js';
import QuestionRenderer from './QuestionRenderer.jsx';
import Search from './Search.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: this.props.data.qa.results,
      filteredQuestions: this.props.data.qa.results,
    };
  }

  searchFilter(value) {
    let filteredQuestions = [];
    for (let i = 0; i < this.state.questionList.length; i += 1) {
      const question = this.state.questionList[i];
      if (question.question_body.toLowerCase().includes(value.toLowerCase())) {
        filteredQuestions.push(question);
      }
    }
    this.setState({ filteredQuestions });
  }

  render() {
    return (
      <styles.QA>
        <styles.Title>
          <div>QUESTIONS & ANSWERS</div>
        </styles.Title>
        <div>
          <Search searchFilter={this.searchFilter.bind(this)}/>
        </div>
        <div>
          {this.state.filteredQuestions.map((question) => (
            <QuestionRenderer question={question} />
          ))}
        </div>
      </styles.QA>
    );
  }
}

export default QA;
