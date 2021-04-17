import styles from "./styles.js"
import React from 'react';
import QuestionRenderer from './QuestionRenderer.jsx';



class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
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
    );
  }
}

export default QA;
