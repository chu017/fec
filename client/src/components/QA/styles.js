import styled from "styled-components";

<<<<<<< HEAD
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Title2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const QuestionText = styled.div`
  font-family: Helvetica Neue;
  font-weight: 400;
  font-style: Italic;
  color: black;
=======
const primarySize = '1.1em';
const secondarySize = '0.75em';
const primaryColor = '#454444';
const secondaryColor = '#858383';
const primaryFont = 'Helvetica Neue';

const QA = styled.div`
  margin-left: 40%;
`;

const Title = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: ${primaryColor};
  font-size: ${primarySize};
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
  width: 50%;
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
>>>>>>> Add Answer Helpfulness & Improve CSS Styling Reusability
`;

const AnswerText = styled.div`
  font-family: Helvetica Neue;
  font-weight: 200;
  color: black;
`;

<<<<<<< HEAD
const QuestionBlock = styled.div`
  border: solid 1px;
  margin-bottom: 10px;
`;

const AnswerBlock = styled.div`
  border: solid 1px;
`;

const styles = { Title, Title2, QuestionText, AnswerText, QuestionBlock, AnswerBlock };
export default styles;
=======
const AnswerSubtitle = styled.div`
  padding-top: 2px;
  padding-left: 32px;
  margin-bottom: 8px;
  font-size: ${secondarySize};
  color: #858383;
`;

const AnswerBlock = styled.div`
`;

const SearchBar = styled.input`
  width: 40%;
  margin-top: 5px;
`;

const HyperLink = styled.a`
  color: ${secondaryColor};
`;

const styles = {
  Title,
  BoldedText,
  QuestionBlock,
  QuestionLine,
  QuestionText,
  QuestionSubtitle,
  AnswerText,
  AnswerSubtitle,
  AnswerBlock,
  QA,
  SearchBar,
  HyperLink,
};
export default styles;
>>>>>>> Add Answer Helpfulness & Improve CSS Styling Reusability
