import React from 'react';
// import styled from 'styled-components';

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div>
            <em>Project Catwalk</em>
            <div className="search">search</div>
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
