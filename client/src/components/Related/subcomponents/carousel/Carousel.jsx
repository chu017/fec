/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Next from './Next.jsx';
import Prev from './Prev.jsx';
import Card from '../card/Card.jsx';
import CardOutfit from '../card/CardOutfit.jsx';
import styles from '../../styled.js';
import ModalCompare from '../card/ModalCompare.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.scroll = this.scroll.bind(this);
    this.scrollRef = React.createRef();
    this.scrollOutfit = this.scrollOutfit.bind(this);
    this.scrollOutfitRef = React.createRef();
    this.checkButtons = this.checkButtons.bind(this);
    this.checkOutfitButtons = this.checkOutfitButtons.bind(this);
    this.nextRef = React.createRef();

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      sortedData: [],
      modalVisible: false,
      prevVisible: false,
      nextVisible: true,
      prevOutfitVisible: false,
      nextOutfitVisible: true,
      buttonDisable: false,
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const { relatedIds, relatedInformation, relatedStyles } = data.related;
    const newSort = [];
    for (let i = 0; i < relatedIds.length; i += 1) {
      newSort.push([relatedInformation[i], relatedStyles[i]]);
    }
    this.setState({
      sortedData: newSort,
    });
  }

  checkButtons() {
    const scrollBarWidth = this.scrollRef.current.clientWidth - 196;
    console.log(this.scrollRef.current.scrollWidth, scrollBarWidth);
    const prevBool = this.scrollRef.current.scrollLeft >= 196;
    this.setState({
      prevVisible: prevBool,
      nextVisible: this.scrollRef.current.scrollLeft < scrollBarWidth,
    });
  }

  checkOutfitButtons() {
    const scrollBarWidth = this.scrollOutfitRef.current.clientWidth - 196;
    console.log(this.scrollOutfitRef.current.scrollWidth, scrollBarWidth);
    const prevBool = this.scrollOutfitRef.current.scrollLeft >= 196;
    this.setState({
      prevOutfitVisible: prevBool,
      nextOutfitVisible: this.scrollOutfitRef.current.scrollLeft < scrollBarWidth,
    });
  }

  scroll(distance) {
    this.setState({
      buttonDisable: true,
    });
    if (this.scrollRef && this.scrollRef.current) {
      this.scrollRef.current.scrollLeft += distance;
    }
    setTimeout(() => {
      this.checkButtons();
      this.setState({
        buttonDisable: false,
      });
    }, 400);
  }

  scrollOutfit(distance) {
    this.setState({
      buttonDisable: true,
    });
    if (this.scrollOutfitRef && this.scrollOutfitRef.current) {
      this.scrollOutfitRef.current.scrollLeft += distance;
    }
    setTimeout(() => {
      this.checkOutfitButtons();
      this.setState({
        buttonDisable: false,
      });
    }, 400);
  }

  toggleModal() {
    const { modalVisible } = this.state;
    if (modalVisible === true) {
      this.setState({ modalVisible: false });
    } else {
      this.setState({ modalVisible: true });
    }
  }

  render() {
    const {
      sortedData, modalVisible, prevVisible, nextVisible, buttonDisable, prevOutfitVisible,
      nextOutfitVisible,
    } = this.state;
    return (
      <div>
        <styles.carouselWrapperDiv>
          {prevVisible ? (
            <Prev
              scroll={this.scroll}
              className={buttonDisable ? 'disabled' : null}
            />
          ) : null}
          <styles.carouselDiv ref={this.scrollRef}>

            {modalVisible ? (
              <styles.modalDiv>
                <ModalCompare
                  toggleModal={this.toggleModal}
                />
              </styles.modalDiv>
            ) : null}

            {sortedData.map((item) => (
              <Card
                name={item[0].name}
                category={item[0].category}
                price={item[0].default_price}
                image={item[1].results[0].photos[0].thumbnail_url}
                key={item[0].id}
                modalVisible={modalVisible}
                toggleModal={this.toggleModal}
              />
            ))}
          </styles.carouselDiv>
          {nextVisible ? (
            <Next
              scroll={this.scroll}
              className={buttonDisable ? 'disabled' : null}
            />
          ) : null}
        </styles.carouselWrapperDiv>
        <br />
        <styles.carouselWrapperDiv>
          {prevOutfitVisible ? (
            <Prev
              scroll={this.scrollOutfit}
              className={buttonDisable ? 'disabled' : null}
            />
          ) : null}
          <styles.carouselDiv ref={this.scrollOutfitRef}>

            {modalVisible ? (
              <styles.modalDiv>
                <ModalCompare
                  toggleModal={this.toggleModal}
                />
              </styles.modalDiv>
            ) : null}

            {sortedData.map((item) => (
              <CardOutfit
                name={item[0].name}
                category={item[0].category}
                price={item[0].default_price}
                image={item[1].results[0].photos[0].thumbnail_url}
                key={item[0].id}
                modalVisible={modalVisible}
                toggleModal={this.toggleModal}
              />
            ))}
          </styles.carouselDiv>
          {nextOutfitVisible ? (
            <Next
              scroll={this.scrollOutfit}
              className={buttonDisable ? 'disabled' : null}
            />
          ) : null}
        </styles.carouselWrapperDiv>
      </div>
    );
  }
}

export default Carousel;
