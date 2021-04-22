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

const Overview = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_photos: this.props.data.styles.results[0],
      defaultView: true,
    };

    this.selectStyle = this.selectStyle.bind(this);
    this.expandView = this.expandView.bind(this);
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

  render() {
    return (
      <div>
        {this.state.defaultView === true && (
        <OverviewDefault
          data={this.props.data}
          style={this.state.style_photos}
          selectStyle={this.selectStyle}
          defaultView={this.state.defaultView}
          expandView={this.expandView}
          getOutfit={this.props.getOutfit}
        />
        )}

        {this.state.defaultView === false && (
        <OverViewExpanded
          data={this.props.data}
          style={this.state.style_photos}
          defaultView={this.state.defaultView}
          expandView={this.expandView}
        />
        )}
      </div>
    );
  }
};

export default Overview;
