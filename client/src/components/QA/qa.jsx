/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import styles from './SubComponents/styles.js';
import QuestionRenderer from './SubComponents/QuestionRenderer.jsx';
import Search from './SubComponents/Search.jsx';
import QuestionModal from './SubComponents/Modals/NewQuestion.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: this.props.data.qa.results,
      filteredQuestions: this.props.data.qa.results,
      showQuestionCreate: true,
    };
  }

  searchFilter(value) {
    const filteredQuestions = [];
    for (let i = 0; i < this.state.questionList.length; i += 1) {
      const question = this.state.questionList[i];
      if (question.question_body.toLowerCase().includes(value.toLowerCase())) {
        filteredQuestions.push(question);
      }
    }
    this.setState({ filteredQuestions });
  }

  toggleModal() {
    const currentView = !this.state.showQuestionCreate;
    this.setState({showQuestionCreate: currentView});
  }

  render() {
    return (
      <styles.QA>
        <styles.Title>
          <div>QUESTIONS & ANSWERS</div>
        </styles.Title>
        <div>
          <Search searchFilter={this.searchFilter.bind(this)} />
        </div>
        <div>
          {this.state.filteredQuestions.map((question) => (
            <QuestionRenderer question={question} key={Math.random() * 100000} />
          ))}
        </div>
        <styles.AddQuestionButton>Load More Questions</styles.AddQuestionButton>
        <styles.AddQuestionButton onClick={this.toggleModal.bind(this)}>Add A Question</styles.AddQuestionButton>
        <QuestionModal show={this.state.showQuestionCreate} toggleView={this.toggleModal.bind(this)} productInformation={this.props}/>
      </styles.QA>
    );
  }
}

export default QA;
