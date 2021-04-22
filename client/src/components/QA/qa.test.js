import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import sampleData from '../sampleData';
import QA from './qa';
import QuestionRenderer from './SubComponents/QuestionRenderer';
import AnswerRenderer from './SubComponents/AnswerRenderer';

import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QA data={sampleData} />, div);
});

it('renders a formatted question line', () => {
  const { getByTestId } = render(<QuestionRenderer question={sampleData.qa.results[0]} />);
  expect(getByTestId('QuestionText')).toHaveTextContent('Q: Does this product run big or small?');
});

it('renders a formatted answer line', () => {
  const { getByText } = render(<AnswerRenderer answers={sampleData.qa.results[1].answers} />);
  expect(getByText('I\'ve thrown it in the wash and it seems fine')).toHaveTextContent('A: I\'ve thrown it in the wash and it seems fine');
});

it('renders no answers if none are present', () => {
  const { getByTestId } = render(<AnswerRenderer answers={sampleData.qa.results[0].answers} />);
  expect(getByTestId('NoAnswer')).toHaveTextContent('No Answers Available for this Question.');
});

it('renders an option to load more answers if more than two are present', () => {
  const { getByTestId } = render(<AnswerRenderer answers={sampleData.qa.results[1].answers} />);
  expect(getByTestId('LoadMoreAnswers')).toHaveTextContent('LOAD MORE ANSWERS');
});

it('should not render more than two answers', () => {
  const { queryByText } = render(<AnswerRenderer answers={sampleData.qa.results[1].answers} />);
  expect(queryByText('I wouldn\'t machine wash it')).toBeNull();
});