/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Next from './Next.jsx';
import Prev from './Prev.jsx';
import Card from '../card/Card.jsx';
import styles from '../../styled.js';
import ModalCompare from '../card/ModalCompare.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.scroll = this.scroll.bind(this);
    this.scrollRef = React.createRef();
    this.scrollOutfit = this.scrollOutfit.bind(this);
    this.scrollOutfitRef = React.createRef();

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      sortedData: [],
      outfitData: [],
      modalVisible: false,
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

  scroll(distance) {
    if (this.scrollRef && this.scrollRef.current) {
      this.scrollRef.current.scrollLeft += distance;
    }
  }

  scrollOutfit(distance) {
    if (this.scrollOutfitRef && this.scrollOutfitRef.current) {
      this.scrollOutfitRef.current.scrollLeft += distance;
    }
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
    const { sortedData, outfitData, modalVisible } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default Carousel;
