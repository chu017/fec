<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable react/prop-types */
=======
>>>>>>> created subcomponents for carousel
=======
/* eslint-disable react/prop-types */
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
/* eslint-disable import/extensions */
import React from 'react';
import Next from './Next.jsx';
import Prev from './Prev.jsx';
import Card from '../card/Card.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
import CardOutfit from '../card/CardOutfit.jsx';
import styles from '../../styled.js';
import ModalCompare from '../card/ModalCompare.jsx';
=======
>>>>>>> created subcomponents for carousel
=======
import styles from '../../styled.js';
import ModalCompare from '../card/ModalCompare.jsx';
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data

class Carousel extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
<<<<<<< HEAD
    this.scroll = this.scroll.bind(this);

    this.scrollRef = React.createRef();

    this.scrollOutfit = this.scrollOutfit.bind(this);
    this.scrollOutfitRef = React.createRef();
    this.checkButtons = this.checkButtons.bind(this);
    this.checkOutfitButtons = this.checkOutfitButtons.bind(this);
    this.nextRef = React.createRef();
=======
    this.scroll = this.scroll.bind(this);
    this.scrollRef = React.createRef();
    this.scrollOutfit = this.scrollOutfit.bind(this);
    this.scrollOutfitRef = React.createRef();
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      sortedData: [],
<<<<<<< HEAD
      modalVisible: false,
      prevVisible: false,
      nextVisible: true,
      prevOutfitVisible: false,
      nextOutfitVisible: true,
      buttonDisable: false,
=======
      outfitData: [],
      modalVisible: false,
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
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

<<<<<<< HEAD
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
=======
  scroll(distance) {
    if (this.scrollRef && this.scrollRef.current) {
      this.scrollRef.current.scrollLeft += distance;
    }
  }

  scrollOutfit(distance) {
    if (this.scrollOutfitRef && this.scrollOutfitRef.current) {
      this.scrollOutfitRef.current.scrollLeft += distance;
    }
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
  }

  toggleModal() {
    const { modalVisible } = this.state;
    if (modalVisible === true) {
      this.setState({ modalVisible: false });
    } else {
      this.setState({ modalVisible: true });
    }
<<<<<<< HEAD
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
=======
    this.state = {};
=======
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
  }

  render() {
    const { sortedData, outfitData, modalVisible } = this.state;
    return (
      <div>
<<<<<<< HEAD
        <Prev />
        <Card />
        <Next />
>>>>>>> created subcomponents for carousel
=======
        <styles.carouselWrapperDiv>
          <Prev scroll={this.scroll} />
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
          <Next scroll={this.scroll} />
        </styles.carouselWrapperDiv>
        <br />
        <styles.carouselWrapperDiv>
          <Prev scroll={this.scrollOutfit} />
          <styles.carouselDiv ref={this.scrollOutfitRef}>
            {sortedData.map((item) => (
              <Card
                name={item[0].name}
                category={item[0].category}
                price={item[0].default_price}
                image={item[1].results[0].photos[0].thumbnail_url}
                key={item[0].id}
              />
            ))}
          </styles.carouselDiv>
          <Next scroll={this.scrollOutfit} />
        </styles.carouselWrapperDiv>
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
      </div>
    );
  }
}

export default Carousel;
