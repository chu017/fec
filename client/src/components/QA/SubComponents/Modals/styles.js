import styled from 'styled-components';

const primarySize = '1.1em';
const secondarySize = '0.75em';
const primaryColor = '#454444';
const secondaryColor = '#858383';
const primaryFont = 'Helvetica Neue';

const ModalBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.2)
`;

const ModalContentWrapper = styled.div`
  position: fixed;
  width: 30%;
  height: 30%;
  background: white;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5%;
`;

const ModalContent = styled.div`
  font-family: ${primaryFont};
  margin-top:5px;
  margin-bottom: 10px;
  font-size: ${primarySize};
  color: ${primaryColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalExit = styled.div`
  text-align: right;
`;

const LargeInput = styled.input`
  width: 80%;
  height: 40%;
  margin-bottom: 2px;
`;

const NormalInput = styled.input`
  width: 80%;
  height: 40%;
  margin-bottom: 2px;
`;

const WarningText = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: red;
  font-size: ${secondarySize};
`;

const SuccessText = styled.div`
  margin-top: 5px;
  font-family: ${primaryFont};
  font-weight: 200;
  color: green;
  font-size: ${secondarySize};
`;

const styles = {
  ModalBackdrop,
  ModalContentWrapper,
  ModalContent,
  ModalExit,
  LargeInput,
  NormalInput,
  WarningText,
  SuccessText,
};

export default styles;
