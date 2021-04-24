import React from 'react';
import styles from './styles';
import secondaryStyles from '../styles';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      warningText: '',
    };
  }

  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  handleNick(event) {
    this.setState({ nickname: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  submitQuestion() {
    const { boolQuestion, boolNick, boolEmail } = this.dataIsValid();
    if (boolQuestion && boolNick && boolEmail) {
      this.setState({ warningText: '' });
      this.postQuestion();
    } else {
      let warningText = '';
      if (!boolQuestion) {
        warningText += ' Please input a valid Question.';
      }
      if (!boolNick) {
        warningText += ' Please input a valid Nickname.';
      }
      if (!boolEmail) {
        warningText += ' Please input a valid E-Mail Address.';
      }
      this.setState({ warningText });
    }
  }

  postQuestion () {
    console.log(this.state);
    this.setState({warningText: 'Your question has been successfully submitted' });
    setTimeout(this.props.toggleView, 2000);
  }

  dataIsValid() {
    /* Checking that question is not null */
    let boolQuestion = true;
    let boolNick = true;
    let boolEmail = true;
    if (this.state.question.length === 0) {
      boolQuestion = false;
    }
    if (this.state.nickname.length === 0) {
      boolNick = false;
    }
    if (!this.state.email.includes('@') || !this.state.email.includes('.co')) {
      boolEmail = false;
    }
    return { boolQuestion, boolNick, boolEmail };
  }

  render() {
    if (this.props.show) {
      return (
        <styles.ModalBackdrop>
          <styles.ModalContentWrapper>
            <styles.ModalContent>
              <secondaryStyles.Title>Ask Your Question</secondaryStyles.Title>
              <secondaryStyles.SubTitle>
                About the
                {' '}
                {this.props.productInformation.data.product.name}
              </secondaryStyles.SubTitle>
              <secondaryStyles.TertiaryTitle>
                Your Question*
              </secondaryStyles.TertiaryTitle>
              <styles.LargeInput onChange={this.handleQuestion.bind(this)} />
              <secondaryStyles.TertiaryTitle>What is your nickname?*</secondaryStyles.TertiaryTitle>
              <styles.NormalInput onChange={this.handleNick.bind(this)} />
              <secondaryStyles.QuarternaryTitle>
                For privacy reasons, do not use your full name or email address
              </secondaryStyles.QuarternaryTitle>
              <secondaryStyles.TertiaryTitle>Your email*</secondaryStyles.TertiaryTitle>
              <styles.NormalInput onChange={this.handleEmail.bind(this)} />
              <secondaryStyles.AddQuestionButton onClick={this.submitQuestion.bind(this)}>
                Submit Question
              </secondaryStyles.AddQuestionButton>
              <secondaryStyles.TertiaryTitle>
                {this.state.warningText}
              </secondaryStyles.TertiaryTitle>
              <secondaryStyles.AddQuestionButton onClick={this.props.toggleView}>
                x
              </secondaryStyles.AddQuestionButton>
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
