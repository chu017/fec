/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import OverviewDefault from './overviewDefault.jsx';
import OverViewExpanded from './overviewExpanded.jsx';
import ShoppingCart from './addToCart/shoppingCart.jsx';
import sampleDataOutfit from '../sampleData_outfit.js';

const Overview = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_photos: this.props.data.styles.results[0],
      defaultView: true,
      show: false,
      cart: sampleDataOutfit.outfits,
    };

    this.getCart = this.getCart.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
    this.expandView = this.expandView.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.setState({ cart: [cart, ...this.state.cart] });
    }
  }

  selectStyle(photos) {
    this.setState({
      style_photos: photos,
    });
  }

  expandView() {
    this.setState({
      defaultView: this.state.defaultView === true ? false : true,
    });
  }

  showCart() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const {
      data,
      outfitData,
      refreshOutfit,
      ratingPercentage,
    } = this.props;
    return (
      <div>
        {this.state.show === false && (
        <div>
          {this.state.defaultView === true && (
            <OverviewDefault
              data={data}
              outfitData={outfitData}
              refreshOutfit={refreshOutfit}
              ratingPercentage={ratingPercentage}
              style={this.state.style_photos}
              defaultView={this.state.defaultView}
              toggleColorMode={this.props.toggleColorMode}
              selectStyle={this.selectStyle}
              expandView={this.expandView}
              showCart={this.showCart}
              getCart={this.getCart}
            />
          )}

            {this.state.defaultView === false && (
            <OverViewExpanded
              data={data}
              style={this.state.style_photos}
              defaultView={this.state.defaultView}
              expandView={this.expandView}
              showCart={this.showCart}
            />
            )}
        </div>
        )}

        {this.state.show === true && (
          <div>
            <ShoppingCart
              show={this.state.show}
              style={this.state.style_photos}
              cart={this.state.cart}
              onClose={this.showCart}
            >
              My Shopping Cart
            </ShoppingCart>
          </div>
        )}

      </div>
    );
  }
};

export default Overview;
