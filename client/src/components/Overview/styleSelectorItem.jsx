/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Cimage = styled.img`
display: inline-block;
border: 1px solid black;
text-align: center;
height: 50px;
width: 50px;
border-radius: 50%;
margin: 5px;
`;

const StyleSelectorItem = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="circle">
        <Cimage alt="" src={this.props.item.photos[0].thumbnail_url} />
      </div>

    );
  }
};

// eslint-disable-next-line eol-last
export default StyleSelectorItem;