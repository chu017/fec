import styled from 'styled-components';

const body = styled.body`
  background-color: #f7f7f7;
`;

const carouselWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  height: fit-content;
  background-color: #100e17;
  padding-top 10px;
  padding-bottom 10px;
`;

const carouselDiv = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  scroll-behavior: smooth;
  position: relative;
  height: fit-content;
  border-radius: 4px;
  `;

const cardComponentDiv = styled.div`
  padding: 2px 2px;
  background: #f7f7f7;
  text-align: center;
  border-radius: 4px;
  font-family: Verdana;
  max-width: 250px;
  min-width: 250px;
  height: 100%;
  box-shadow: -1rem 0 3rem #000;
  flex-direction: column;
  padding: 1.5rem;
  transition: 0.2s;
  height: 350px;
  `;

const nextComponentDiv = styled.div`
  position: absolute;
  top: 42%;
  right: 0px;
  z-index: 10;
  `;

const prevComponentDiv = styled.div`
  position: absolute;
  top: 42%;
  left: 0px;
  z-index: 10;
  `;

const cardImg = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  border-radius: 4px;
  `;

const navButtons = styled.button`
  background-color: midnightblue;
  border: none;
  color: white;
  padding: 40% 16px;
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
padding: 5px;
transition: 1s;
height: 500px;
z-index: 100;
position: fixed;
border: 4px solid black;
box-shadow: -1.5rem 0 3rem #000;
right:40%;
`;

const table = styled.table`
border: 1px solid black;
`;

const tableData = styled.td`
border: 1px solid black;
`;

const tableHeader = styled.th`
border: 1px solid black;
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
  table,
  tableData,
  tableHeader,
};

export default styles;
