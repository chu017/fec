import styled from 'styled-components';

const titleSize = '1.4em';
const primarySize = '1.0em';
const secondarySize = '0.8em';
const primaryColor = '#454444';
const secondaryColor = '#858383';
const titleFont = "'Bebas Neue', cursive";
const primaryFont = 'Helvetica';

const QA = styled.div`
  padding: 0% 8%;
  margin-top: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 5px;
  font-family: ${titleFont};
  font-weight: 250;
  color: ${primaryColor};
  font-size: ${titleSize};
  letter-spacing: 0.1 em;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 100;
  color: ${primaryColor};
  font-size: ${primarySize};
`;

const TertiaryTitle = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: ${primaryColor};
  font-size: ${secondarySize};
`;

const QuarternaryTitle = styled.div`
margin-top: 5px;
font-family: ${primaryFont};
font-weight: 200;
color: ${primaryColor};
font-size: 0.6em;
`;

const BoldedText = styled.div`
  font-weight: 450;
  font-style: Bold;
  padding-left: 5px;
  padding-right: 5px;
  text-align: left;
`;

const QuestionBlock = styled.div`
  font-family: ${primaryFont};
  margin-top:5px;
  margin-bottom: 10px;
  font-size: ${primarySize};
  color: ${primaryColor};
`;
const QuestionLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionText = styled.div`
  margin-bottom: 15px;
`;

const QuestionSubtitle = styled.div`
  text-align: right;
  font-size: ${secondarySize};
  color: #858383;
`;

const AnswerText = styled.div`
  font-weight: 200;
  padding-left: 10px;
  display: flex;
`;

const AnswerSubtitle = styled.div`
  padding-top: 2px;
  padding-left: 32px;
  margin-bottom: 8px;
  font-size: ${secondarySize};
  color: ${secondaryColor};
`;

const LoadMoreAnswers = styled.div`
  padding-top: 2px;
  padding-left: 32px;
  margin-bottom: 8px;
  font-size: ${secondarySize};
  color: ${secondaryColor};
  text-decoration: underline;
`;

const AnswerBlock = styled.div`
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  margin-top: 5px;
  width: 90%;
`;

const HyperLink = styled.a`
  color: ${secondaryColor};
  text-decoration: underline;
`;

const ButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  margin-left: 10%;
`;

const AddQuestionButton = styled.div`
  margin: 5px;
  font-size: ${secondarySize};
  background: none;
  padding: 1%;
  border: 1.5px solid #252222;
`;

const styles = {
  Title,
  SubTitle,
  TertiaryTitle,
  QuarternaryTitle,
  BoldedText,
  QuestionBlock,
  QuestionLine,
  QuestionText,
  QuestionSubtitle,
  AnswerText,
  AnswerSubtitle,
  AnswerBlock,
  LoadMoreAnswers,
  QA,
  SearchBarWrapper,
  SearchBar,
  HyperLink,
  ButtonContainer,
  AddQuestionButton,
};
export default styles;
