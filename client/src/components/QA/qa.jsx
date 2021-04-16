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
        <div>Questions & Answers</div>
        <br />
        <div>SEARCH BAR</div>
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
