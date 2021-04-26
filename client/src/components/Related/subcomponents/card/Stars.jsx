/* eslint-disable react/prop-types */
import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.renderStars = this.renderStars.bind(this);
    // eslint-disable-next-line react/destructuring-assignment
    this.state = {
    };
  }

  renderStars() {
    const { starMap } = this.props;
    return starMap.map((num) => {
      if (num === 1) {
        return (
          <i className="fas fa-star" />
        );
      }
      if (num < 1 && num > 0) {
        if (num > 0.75) {
          return (<i className="fas fa-star" />);
        }
        if (num >= 0.5 && num < 0.75) {
          return (<i className="fas fa-star" />);
        }
        if (num < 0.5 && num >= 0.25) {
          return (<i className="fas fa-star" />);
        }
        if (num < 0.25) {
          return (<i className="fas fa-star" />);
        }
      }
      if (num === 0) {
        return (<i className="far fa-star" />);
      }
    });
  }

  render() {
    const { starMap } = this.props;
    console.log('starMap', starMap);
    return (
      <div>
        {(starMap.length === 0) ? <div>no rating</div> : this.renderStars()}
      </div>
    );
  }
}

export default Stars;
