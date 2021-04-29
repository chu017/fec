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

        // <div className="size-comfort-container">
        //   <span className="size-comfort-heading">Comfort</span>
        //   <i style={positionCarrot2} className="fas fa-caret-down size-comfort-carrot"></i>
        //   <div className="size-comfort">
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Poor</small>
        //     </div>
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //     </div>
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Great</small>
        //     </div>
        //   </div>
        // </div>
        // <div className="size-comfort-container">
        //   <span className="size-comfort-heading">Length</span>
        //   <i style={positionCarrot3} className="fas fa-caret-down size-comfort-carrot"></i>
        //   <div className="size-comfort">
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Too small</small>
        //     </div>
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Perfect</small>
        //     </div>
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Too large</small>
        //     </div>
        //   </div>
        // </div>
        // <div className="size-comfort-container">
        //   <span className="size-comfort-heading">Quality</span>
        //   <i style={positionCarrot4} className="fas fa-caret-down size-comfort-carrot"></i>
        //   <div className="size-comfort">
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Poor</small>
        //     </div>
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //     </div>
        //     <div className="size-comfort-sub-container">
        //       <div className="size-comfort-box"></div>
        //       <small>Great</small>
        //     </div>
        //   </div>
        // </div>