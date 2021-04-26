import React from 'react';
import styles from './styles';
import secondaryStyles from '../styles';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      warningText: '',
      successText: '',
    };
  }

  handleAnswer(event) {
    this.setState({ answer: event.target.value });
  }

  handleNick(event) {
    this.setState({ nickname: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  submitAnswer() {
    const { boolAnswer, boolNick, boolEmail } = this.dataIsValid();
    if (boolAnswer && boolNick && boolEmail) {
      this.setState({ warningText: '' });
      this.postAnswer();
    } else {
      let warningText = 'You must enter the following: ';
      if (!boolAnswer) {
        warningText += 'answer, ';
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

  postAnswer() {
    $.ajax({
      type: 'POST',
      url: `/qa/questions/${this.props.questionInformation.question_id}/answers`,
      data: {
        body: this.state.answer,
        name: this.state.nickname,
        email: this.state.email,
      },
      success: () => {
        this.setState({ successText: 'Your answer has been successfully submitted' });
        setTimeout(this.props.toggleView, 2000);
      },
    });
  }

  dataIsValid() {
    /* Checking that answer is not null */
    let boolAnswer = true;
    let boolNick = true;
    let boolEmail = true;
    if (this.state.answer.length === 0) {
      boolAnswer = false;
    }
    if (this.state.nickname.length === 0) {
      boolNick = false;
    }
    if (!this.state.email.includes('@') || !this.state.email.includes('.co')) {
      boolEmail = false;
    }
    return { boolAnswer, boolNick, boolEmail };
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
              <secondaryStyles.Title>Submit Your Answer</secondaryStyles.Title>
              <secondaryStyles.SubTitle>
                {this.props.productInformation.data.product.name}
                {': '}
                {this.props.questionInformation.question_body}
              </secondaryStyles.SubTitle>
              <secondaryStyles.TertiaryTitle>
                Your Answer*
              </secondaryStyles.TertiaryTitle>
              <styles.LargeInput onChange={this.handleAnswer.bind(this)} />
              <secondaryStyles.TertiaryTitle>What is your nickname?*</secondaryStyles.TertiaryTitle>
              <styles.NormalInput onChange={this.handleNick.bind(this)} />
              <secondaryStyles.QuarternaryTitle>
                For privacy reasons, do not use your full name or email address
              </secondaryStyles.QuarternaryTitle>
              <secondaryStyles.TertiaryTitle>Your email*</secondaryStyles.TertiaryTitle>
              <styles.NormalInput onChange={this.handleEmail.bind(this)} />
              <secondaryStyles.AddQuestionButton onClick={this.submitAnswer.bind(this)}>
                Submit Answer
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
