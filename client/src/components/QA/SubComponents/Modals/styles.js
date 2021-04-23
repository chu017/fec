import styled from 'styled-components';

const primarySize = '1.1em';
const secondarySize = '0.75em';
const primaryColor = '#454444';
const secondaryColor = '#858383';
const primaryFont = 'Helvetica Neue';

const ModalBackdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6)
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
`;

const styles = {
  ModalBackdrop,
  ModalContentWrapper,
  ModalContent,
};

export default styles;
