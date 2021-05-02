/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import AddToCart from './addToCart.jsx';
import sampleData from '../../../sampleData.js';

afterEach(cleanup);

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToCart data={sampleData} />, div);
});

xit('renders button correctly', () => {
  const { getByTestId } = render(<button />);
  expect(getByTestId('button')).toHaveTextContent('Add to Bag');
});

// xit('display', () => {
//   const test = shallow(<AnswerRenderer answers={sampleData.qa.reqults[1].answers} />);
//   test.find({ 'data-testid': 'LoadMoreAnswers' });
//   simulate('click');
//   expect(test.text()).toContain('fdkfjkdjfk');
// });
