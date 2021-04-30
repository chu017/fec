import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import sampleData from '../sampleData';
import Reviews from './reviews.jsx';
import RatingsReviews from './ratings-reviews.jsx';
import MoreReviews from './more-reviews.jsx';

import '@testing-library/jest-dom/extend-expect';

it('renders to the dom', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews data={sampleData} />, div);
});

it('renders more reviews when "more reviews" btn is clicks', () => {
  const moreReviews = <MoreReviews data={sampleData} />;
  const reviews = <Reviews data={sampleData} />;

  const button = moreReviews.find('.review-btn');
  button.simulate('click');

  expect(reviews.state.showPosts).toEqual(4);
});