/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
    return starMap.map((num, i) => {
      if (num === 1) {
        return (
          <i className="fas fa-star" key={`star${i}`}/>
        );
      }
      if (num < 1 && num > 0) {
        if (num > 0.75) {
          return (<i className="fas fa-star-half-alt" key={`star${i}`}/>);
        }
        if (num >= 0.5 && num < 0.75) {
          return (<i className="fas fa-star-half-alt" key={`star${i}`}/>);
        }
        if (num < 0.5 && num >= 0.25) {
          return (<i className="fas fa-star-half-alt" key={`star${i}`}/>);
        }
        if (num < 0.25) {
          return (<i className="fas fa-star-half-alt" key={`star${i}`}/>);
        }
      }
      if (num === 0) {
        return (<i className="far fa-star" key={`star${i}`}/>);
      }
    });
  }

  render() {
    const { reviewCount } = this.props;
    return (
      <div>
        {this.renderStars()}
        <div>{reviewCount}</div>
      </div>
    );
  }
}

export default Stars;
