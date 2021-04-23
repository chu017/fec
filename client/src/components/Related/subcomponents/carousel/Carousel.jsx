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
      newSort.push({ relatedInformation: relatedInformation[i], relatedStyles: relatedStyles[i] });
    }
    this.setState({
      sortedData: newSort,
    });
  }

  checkButtons() {
    const { clientWidth, scrollWidth, scrollLeft } = this.scrollRef.current;
    console.log(scrollWidth, clientWidth, scrollLeft);
    const prevVisible = scrollLeft !== 0;
    const nextVisible = scrollLeft < (scrollWidth - clientWidth);
    this.setState({
      prevVisible,
      nextVisible,
    });
  }

  checkOutfitButtons() {
    const { clientWidth, scrollWidth, scrollLeft } = this.scrollOutfitRef.current;
    const prevOutfitVisible = scrollLeft !== 0;
    const nextOutfitVisible = scrollLeft < (scrollWidth - clientWidth);
    this.setState({
      prevOutfitVisible,
      nextOutfitVisible,
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

            {sortedData.map(({ relatedInformation, relatedStyles }) => (
              <Card
                name={relatedInformation.name}
                category={relatedInformation.category}
                price={relatedInformation.default_price}
                image={relatedStyles.results[0].photos[0].thumbnail_url}
                key={relatedInformation.id}
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

            {sortedData.map(({ relatedInformation, relatedStyles }) => (
              <Card
                name={relatedInformation.name}
                category={relatedInformation.category}
                price={relatedInformation.default_price}
                image={relatedStyles.results[0].photos[0].thumbnail_url}
                key={relatedInformation.id}
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
