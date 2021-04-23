/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
// import styled from 'styled-components';
import OverviewDefault from './overviewDefault.jsx';
import OverViewExpanded from './overviewExpanded.jsx';
import ShoppingCart from './shoppingCart.jsx';
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

    this.selectStyle = this.selectStyle.bind(this);
    this.expandView = this.expandView.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  // compoentDidMount() {

  // }

  selectStyle(photos) {
    this.setState({
      style_photos: photos,
    });
  }

  expandView() {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      defaultView: this.state.defaultView === true ? false : true,
    });
  }

  showCart() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>

        {this.state.show === false && (
        <div>
          {this.state.defaultView === true && (
            <OverviewDefault
              data={this.props.data}
              style={this.state.style_photos}
              selectStyle={this.selectStyle}
              defaultView={this.state.defaultView}
              expandView={this.expandView}
              getOutfit={this.props.getOutfit}
              showCart={this.showCart}
            />
          )}

            {this.state.defaultView === false && (
            <OverViewExpanded
              data={this.props.data}
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
              onClose={this.showCart}
              newItem={this.state.cart}
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
