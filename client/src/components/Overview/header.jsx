/* eslint-disable no-undef */
import React from 'react';
// import styled from 'styled-components';

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.dark = this.dark.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  dark() {
    const element = document.body;
    const nav = document.getElementById('nav');
    element.classList.toggle('dark-mode');
    nav.classList.toggle('navbar-dark');
  }

  render() {
    return (
      <div>
        <nav className="navbar" id="nav">
          <div>
            <em>Project Catwalk</em>
            <div className="search">search</div>
            <button
              type="button"
              className="button-dark"
              onClick={this.dark}
            >
              dark
            </button>
          </div>
        </nav>

        <div className="header">
          <div>SITE WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
        </div>
      </div>
    );
  }
};

export default Header;
