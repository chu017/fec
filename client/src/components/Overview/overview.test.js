/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview.jsx';
import sampleData from '../sampleData.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Overview data={sampleData} />, div);
});
