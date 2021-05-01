/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

class PhotoSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileArr: [],
      imgArr: [],
    };

    this.exit = this.exit.bind(this);
    this.imgProducer = this.imgProducer.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.displayImgs = this.displayImgs.bind(this);
  }

  exit() {
    this.props.exit();
  };

  imgProducer() {
    const newImgArr = this.state.imgArr;
    if (this.state.fileArr.length) {
      const reader = new FileReader();
      this.state.fileArr.map(currentFile => {
        reader.onload = () => {
          newImgArr.push(
            <img
              alt="user-selected"
              src={currentFile.src}
              style={{
                width: '20%',
                height: '80%',
              }}
            />,
          );
          this.setState({
            imgArr: newImgArr,
          });
        };
        reader.readAsDataURL(currentFile);
      });
    }
  }

  handleUpload(e) {
    const [file] = e.target.files;
    const newFileArr = this.state.fileArr;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        file.src = e.target.result;
        newFileArr.push(file);
        this.setState({
          fileArr: newFileArr,
        }, this.imgProducer());
      };

      reader.readAsDataURL(file);
    }
  }

  displayImgs() {
    if (this.state.imgArr.length) {
      return this.state.imgArr.map(img => img);
    }
  }

  render() {
    return (
      <div className="photo-select-modal form">
        <button onClick={this.exit} className="exit-photo-selector" type="button">X</button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <input onChange={this.handleUpload} type="file" accept="image/*" multiple="true" />
        <div className="img-container">
          {this.displayImgs()}
        </div>
      </div>
    );
  }
}

export default PhotoSelector;
