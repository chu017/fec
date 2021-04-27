import React from 'react';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const positionCarrot = {
      left: `${this.props.position}%`,
    };

    return (
      <div className="size-comfort-scale">
        <div className="size-comfort-container">
          <span className="size-comfort-heading">{this.props.detailType}</span>
          <i style={positionCarrot} className="fas fa-caret-down size-comfort-carrot"></i>
          <div className="size-comfort">
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Too small</small>
            </div>
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Perfect</small>
            </div>
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Too large</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBreakdown;
