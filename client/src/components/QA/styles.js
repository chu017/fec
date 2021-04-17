import styled from "styled-components";

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
`;

const AnswerText = styled.div`
  font-family: Helvetica Neue;
  font-weight: 200;
  color: black;
`;

const QuestionBlock = styled.div`
  border: solid 1px;
`;

const styles = { Title, Title2, QuestionText, AnswerText, QuestionBlock };
export default styles;