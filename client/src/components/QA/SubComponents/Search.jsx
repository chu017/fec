/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import styles from './styles.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(event) {
    if (event.target.value.length > 2 || event.target.value.length === 0) {
      this.props.searchFilter(event.target.value);
    }
  }

  render() {
    return (
      <styles.SearchBar type="text" id="questionSearch" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.onChange.bind(this)} />
    );
  }
}

export default Search;
