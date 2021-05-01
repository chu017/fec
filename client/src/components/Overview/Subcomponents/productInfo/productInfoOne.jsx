/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import helpers from '../../../Reviews/helpers.js';
import styles from './styles.js';

const Rtext = styled.div`
font-size: 1rem;
color: red;
`;

class ProductInfoOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0,
      ratingPercentage: 0,
    };

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  componentDidMount() {
    this.getRating();
  }

  getRating() {
    const avgRating = helpers.getRating(this.state.avgRating, this.props.data.reviews.reviewMeta.ratings);
    this.setState({
      avgRating,
    }, () => this.getRatingPercentage());
  }

  getRatingPercentage() {
    const ratingPercentage = helpers.getRatingPercentage(this.state.avgRating);
    this.setState({
      ratingPercentage,
    });
  }

  render() {
    const { photos, data } = this.props;
    const { original_price } = photos;
    const { product } = data;

    const starInnerWidth = {
      width: this.state.ratingPercentage,
    };

    return (
      <div className="product-information">
        <styles.StarsOuterBefore>
          <styles.StarsInnerBefore style={{ width: this.state.ratingPercentage }}></styles.StarsInnerBefore>
        </styles.StarsOuterBefore>
        <a href="#reviews">Read all reviews</a>
        <br />
        <div>CATEGORY: {this.props.data.product.category}</div>
        <h1 className="title-size">{this.props.data.product.name}</h1>
        <div>Price: ${this.props.photos.original_price}</div>
        <div>
          {(this.props.photos.sale_price)
          && <styles.Rtext>Sale: ${this.props.photos.sale_price}</styles.Rtext>}
        </div>
      </div>

    );
  }
}

export default ProductInfoOne;
