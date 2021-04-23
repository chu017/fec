import React from 'react';
import styles from './styles';
import secondaryStyles from '../styles';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.show) {
      return (
        <styles.ModalBackdrop>
          <styles.ModalContentWrapper>
            <styles.ModalContent>
              <secondaryStyles.Title>Ask Your Question</secondaryStyles.Title>
              <secondaryStyles.SubTitle>About the {this.props.productInformation.data.product.name}</secondaryStyles.SubTitle>
              <button onClick={this.props.toggleView}>x</button>
            </styles.ModalContent>
          </styles.ModalContentWrapper>
        </styles.ModalBackdrop>
      );
    }

    return (
      <div />
    );
  }
}

export default Modal;
