<<<<<<< HEAD
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

=======
import styles from "./styles.js"
>>>>>>> Add Styling to Question Component
import React from 'react';
<<<<<<< HEAD
import styles from './SubComponents/styles.js';
import QuestionRenderer from './SubComponents/QuestionRenderer.jsx';
import Search from './SubComponents/Search.jsx';
=======
import QuestionRenderer from './QuestionRenderer.jsx';
>>>>>>> Add Preliminary Question & Answer Handling



class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
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
=======
    };
>>>>>>> Add Preliminary Question & Answer Handling
  }

  render() {
    return (
<<<<<<< HEAD
      <styles.QA>
        <styles.Title>
          <div>QUESTIONS & ANSWERS</div>
        </styles.Title>
        <div>
          <Search searchFilter={this.searchFilter.bind(this)}/>
        </div>
        <div>
          {this.state.filteredQuestions.map((question) => (
            <QuestionRenderer question={question} key={Math.random() * 100000}/>
          ))}
        </div>
      </styles.QA>
=======
      <div>
        <styles.Title>
          <div>Questions & Answers</div>
          <div>
          <styles.QuestionText>Search Bar</styles.QuestionText>
          </div>
          </styles.Title>
        <br />
        <br />
        <div>
          {this.props.data.qa.results.map((question) => (
            <QuestionRenderer question={question} />
          ))}
        </div>
      </div>
>>>>>>> Add Preliminary Question & Answer Handling
    );
  }
}

export default QA;
