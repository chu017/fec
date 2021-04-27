/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import AddToCart from './addToCart.jsx';
import sampleData from '../../sampleData.js';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToCart data={sampleData} />, div);
});
