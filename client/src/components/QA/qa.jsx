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
    };
  }

  render() {
    return (
      <styles.QA>
        <styles.Title>
          <div>QUESTIONS & ANSWERS</div>
        </styles.Title>
        <div>
          <Search />
        </div>
        <div>
          {this.props.data.qa.results.map((question) => (
            <QuestionRenderer question={question} />
          ))}
        </div>
      </styles.QA>
    );
  }
}

export default QA;
