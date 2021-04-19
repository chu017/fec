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
`;
const QuestionLine = styled.div`
  display: flex;
`;

const QuestionText = styled.div`
  font-weight: 350;
  font-style: Bold;
  color: #454444;
  padding-left: 5px;
  margin-bottom: 15px;
  padding-right: 5px;
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

const styles = {
  Title, QuestionBlock, QuestionLine, QuestionText, AnswerText, AnswerBlock, QA, SearchBar,
};
export default styles;
