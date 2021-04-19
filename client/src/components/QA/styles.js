import styled from 'styled-components';

const QA = styled.div`
  margin-left: 40%;
`;

const Title = styled.div`
  margin-top: 5px;
  font-family: Helvetica Neue;
  font-weight: 200;
  color: #454444;
`;

const QuestionBlock = styled.div`
  font-family: Helvetica Neue;
  margin-top:5px;
  margin-bottom: 10px;
  font-size: 0.8em;
  color: #454444;
  width: 50%;
`;
const QuestionLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionText = styled.div`
  font-weight: 350;
  font-style: Bold;
  padding-left: 5px;
  margin-bottom: 15px;
  padding-right: 5px;
  text-align: left;
`;

const QuestionSubtitle = styled.div`
  text-align: right;
  font-size: 0.4em;
  color: #858383;
`;

const AnswerText = styled.div`
  font-weight: 200;
  padding-left: 10px;
  display: flex;
`;

const AnswerBlock = styled.div`
`;

const SearchBar = styled.input`
  width: 40%;
  margin-top: 5px;
`;

const HyperLink = styled.a`
  color: #858383;
`;

const styles = {
  Title,
  QuestionBlock,
  QuestionLine,
  QuestionText,
  QuestionSubtitle,
  AnswerText,
  AnswerBlock,
  QA,
  SearchBar,
  HyperLink,
};
export default styles;
