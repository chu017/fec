import React from 'react';
import styled from 'styled-components';
import helpers from './../../../Reviews/helpers.js'

const Rtext = styled.div`
font-size: 1rem;
color: red;
`;

const StarsOuterBefore = styled.div`
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 200;
  }
  & {
    font-size: 12px;
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;

const StarsInnerBefore = styled.div`
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #000;
  }
  & {
    size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }
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
        <StarsOuterBefore>
          <StarsInnerBefore style={{ width: this.state.ratingPercentage }}></StarsInnerBefore>
        </StarsOuterBefore>
        <a href="#reviews">Read all reviews</a>
        <br />
        <div>CATEGORY: {this.props.data.product.category}</div>
        <h1 className="title-size">{this.props.data.product.name}</h1>
        <div>Price: ${this.props.photos.original_price}</div>
        <div>
          {(this.props.photos.sale_price)
          && <Rtext>Sale: ${this.props.photos.sale_price}</Rtext>}
        </div>
      </div>

    );
  }
}

export default ProductInfoOne;
