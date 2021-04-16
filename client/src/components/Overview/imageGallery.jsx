import React from 'react';

const ImageGallery = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h4>Image Gallery</h4>
        <img alt="" src="	https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" />
      </div>
    );
  }
};

export default ImageGallery;