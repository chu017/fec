/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import styled from 'styled-components';
import {
  AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineArrowDown,
} from 'react-icons/Ai';
import ImageGalleryItem from './imageGalleryItem.jsx';

const ImageGallery = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      length: this.props.data.photos.length,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.reSetCurrent = this.reSetCurrent.bind(this);
  }

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

  reSetCurrent(num) {
    this.setState({
      current: num,
    });
  }

  render() {
    return (
      <div>
        <section className="slider">
          <AiOutlineArrowLeft className="left-arrow" onClick={this.prevSlide} />
          <AiOutlineArrowRight className="right-arrow" onClick={this.nextSlide} />

          <section className="slider-vertical">
            {/* <AiOutlineArrowUp type="button" className="up-arrow" />
            <AiOutlineArrowDown type="button" className="down-arrow" /> */}

            {this.props.data.photos.map((item, index) => (
              <ImageGalleryItem
                item={item}
                num={index}
                key={index}
                reSetCurrent={this.reSetCurrent}
              />
            ))}
          </section>

          {this.props.data.photos.map((item, index) => (

            <div className={index === this.state.current ? 'slide-active' : 'slide'} key={index}>
              {index === this.state.current && (<img alt="" src={item.url} className="image" />
              )}
            </div>
          ))}
        </section>

      </div>

    );
  }
};

export default ImageGallery;

/*
        <section className="slider-vertical">
          <AiOutlineArrowUp type="button" className="up-arrow" />
          <AiOutlineArrowDown type="button" className="down-arrow" />

          {this.props.data.styles.results.map((item, index) => (
            <ImageGalleryItem item={item} key={index} />
          ))}
        </section>
*/
