/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/Ai';

// const SImage = styled.img`
//   display: inline-block;
//   height: 80%;
//   width: 80%;
// `;

const ImageGallery = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      length: this.props.data.styles.results.length,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  // src="https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"

  // if (!Array.isArray(this.state.current) || this.state.length <= 0) {
  //   return null;
  // }

  nextSlide() {
    this.setState({
      current: this.state.current === this.state.length - 1 ? 0 : this.state.current + 1,
    });
  }

  prevSlide() {
    this.setState({
      current: this.state.current === 0 ? this.state.length - 1 : this.state.current - 1,
    });
  }

  render() {
    return (
      <section className="slider">
        <AiOutlineArrowLeft className="left-arrow" onClick={this.prevSlide} />
        <AiOutlineArrowRight className="right-arrow" onClick={this.nextSlide} />

        {this.props.data.styles.results.map((item, index) => (

          <div className={index === this.state.current ? 'slide-active' : 'slide'} key={index}>
            {index === this.state.current && (<img alt="" src={item.photos[0].url} className="image" />
            )}
          </div>
        ))}
      </section>
    );
  }
};

// eslint-disable-next-line eol-last
export default ImageGallery;
