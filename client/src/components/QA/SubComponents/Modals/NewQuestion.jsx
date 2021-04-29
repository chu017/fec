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
      successText: '',
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
      let warningText = 'You must enter the following: ';
      if (!boolQuestion) {
        warningText += 'question, ';
      }
      if (!boolNick) {
        warningText += 'nickname, ';
      }
      if (!boolEmail) {
        warningText += 'email, ';
      }
      const lastComma = warningText.lastIndexOf(', ');
      const finalWarningText = warningText.substring(0, lastComma) + '.';
      this.setState({ warningText: finalWarningText });
    }
  }

  postQuestion() {
    $.ajax({
      type: 'POST',
      url: '/qa/questions',
      data: {
        body: this.state.question,
        name: this.state.nickname,
        email: this.state.email,
        product_id: this.props.productInformation.data.product.id,
      },
      success: () => {
        this.setState({ successText: 'Your question has been successfully submitted' });
        setTimeout(this.props.toggleView, 2000);
      },
    });
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
              <styles.ModalExit>
                <secondaryStyles.SubTitle onClick={this.props.toggleView}>
                  x
                </secondaryStyles.SubTitle>
              </styles.ModalExit>
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
              <styles.WarningText>
                {this.state.warningText}
              </styles.WarningText>
              <styles.SuccessText>
                {this.state.successText}
              </styles.SuccessText>
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
