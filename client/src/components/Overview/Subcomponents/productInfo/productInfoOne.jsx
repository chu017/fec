import React from 'react';
import styled from 'styled-components';
import helpers from './../../../Reviews/helpers.js'

const Rtext = styled.div`
font-size: 1rem;
color: red;
`;

class ProductInfoOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0,
    };

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  // componentDidMount() {
  //   this.getRating();
  // }

  // getRating() {
  //   const avgRating = helpers.getRating(this.state.avgRating, this.props.data.reviews.reviewMeta.ratings);
  //   this.setState({
  //     avgRating,
  //   }, () => this.getRatingPercentage());
  // }

  // getRatingPercentage() {
  //   const ratingPercentage = helpers.getRatingPercentage(this.state.avgRating);
  //   this.setState({
  //     ratingPercentage,
  //   });
  // }

  render() {
    const { photos, data } = this.props;
    const { original_price } = photos;
    const { product } = data;

    return (
      <div className="product-information">
        <div className="">{this.props.ratingPercentage}</div>
        <div>Read all reviews</div>
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
