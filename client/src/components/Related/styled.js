import styled from 'styled-components';

const body = styled.body`
  background-color: #f7f7f7;
`;

const carouselWrapperDiv = styled.div`
  position: relative;
  width: 50%;
  border-radius: 4px;
  height: 35%;
`;

const carouselDiv = styled.div`
  width: 500px;
  overflow-x: hidden;
  display: flex;
  background-color: #100e17;
  padding: 3rem;
  scroll-behavior: smooth;
  position: relative;
  height: 600px;
  border-radius: 4px;
  left: 120px;
  `;

const cardComponentDiv = styled.div`
  padding: 5px 20px;
  background: #f7f7f7;
  text-align: center;
  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  font-family: Verdana;
  min-width: 300px;
  height: 100%;
  box-shadow: -1rem 0 3rem #000;
  flex-direction: column;
  padding: 1.5rem;
  transition: 0.2s;
  height: 500px;

  `;

const nextComponentDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 140%;
  z-index: 10;
  `;

const prevComponentDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  z-index: 10;
  `;

const cardImg = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;`;

const navButtons = styled.button`
  background-color: midnightblue;
  border: none;
  color: white;
  padding: 16px 16px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  `;

const modalDiv = styled.div`
padding: 5px 20px;
background: #f7f7f7;
text-align: center;
border-radius: 4px;
font-family: Verdana;
height: 100%;
flex-direction: column;
padding: 1.5rem;
transition: 1s;
height: 500px;
z-index: 100;
position: fixed;
`;

const styles = {
  body,
  carouselWrapperDiv,
  carouselDiv,
  cardComponentDiv,
  nextComponentDiv,
  prevComponentDiv,
  cardImg,
  navButtons,
  modalDiv,
};

export default styles;
