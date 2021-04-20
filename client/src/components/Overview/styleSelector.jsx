/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import styled from 'styled-components';
import StyleSelectorItem from './styleSelectorItem.jsx';

const StyleSelector = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="style-selector">
        <h5>STYLE - SELECTED STYLE</h5>
        {this.props.data.styles.results.map((item, i) => (
            <StyleSelectorItem item={item} key={i} />
        ))}
      </div>

    );
  }
};

// eslint-disable-next-line eol-last
export default StyleSelector;