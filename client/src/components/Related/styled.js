// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const body = styled.body`
  background-color: #f7f7f7;
`;

const OutfitWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  height: 300px;
  background-color: midnightblue;
  padding-top 1%;
  padding-bottom 1%;
  display: block;
`;

const carouselWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  height: 325px;
  background-color: #100e17;
  padding-top 1%;
  padding-bottom 1%;
  display: block;
`;

const carouselDiv = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  position: relative;
  height: 100%;
  border-radius: 4px;
  width: 52%;
  margin-left: 23%;
  margin-right: 23%;
  display: flex;
  `;

const cardComponentDiv = styled.div`
  background: #f7f7f7;
  text-align: center;
  border-radius: 4px;
  font-family: Verdana;
  max-width: 20%;
  min-width: 20%;
  min-height: 95%;
  max-height: 95%;
  box-shadow: -1.5rem -2rem 3rem midnightblue;
  margin-right: 2.5%;
  margin-left: 2.5%;
  font-size: .2em;
  padding-top: 2%;
  `;

const outfitCardComponentDiv = styled.div`
  background: #f7f7f7;
  text-align: center;
  border-radius: 4px;
  font-family: Verdana;
  max-width: 20%;
  min-width: 20%;
  min-height: 95%;
  max-height: 95%;
  margin-right: 2.5%;
  margin-left: 2.5%;
  font-size: .2em;
  padding-top: 2%;
  box-shadow: -1.5rem -2rem 3rem #100e17;
  `;

const nextComponentDiv = styled.div`
  position: absolute;
  top: 40%;
  right: 20%;
  z-index: 10;
  `;

const prevComponentDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  z-index: 10;
  `;

const cardImg = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
  margin: auto;
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
const navOutfitButtons = styled.button`
  background-color: #100e17;
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
background: #f7f7f7;
text-align: center;
border-radius: 40px;
font-family: Verdana;
height: 45%;
width: 45%;
flex-direction: column;
padding: 1.5rem;
z-index: 100;
position: fixed;
top: 25%;
left: 30%;
border: 2px solid;
border-color: grey;
overflow-y: scroll;
::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}
`;

const salePrice = styled.span`
color: red;
margin-right: 10%;
`;

const defaultPriceStrike = styled.span`
text-decoration: line-through;
`;

const table = styled.table`
border: 1px solid grey;
width: 100%;
height: 100%;
border-radius: 10px;
background-color: midnightblue;
height: fit-content;
padding: 2%;
`;

const tableData = styled.td`
border: 1px solid grey;
text-align: center;
border-radius: 10px;
background-color: white;
`;

const tableHeader = styled.th`
border: 1px solid grey;
border-radius: 10px;
background-color: grey;
`;

const closeModal = styled.div`
background-color: maroon;
height: 3%;
width: 3%;
font-size: 5em;
position: fixed;
right: 23%;
top: 25.2%;
color: white;
`;

const modalTitle = styled.div`
font-size: 5em;
border: 1px solid black;
border-radius: 10px;
background-color: #100e17;
color: white;
`;

const modalFirstRow = styled.th`
height: 10%;
border: 1px solid grey;
border-radius: 10px;
background-color: grey;
`;

const styles = {
  modalFirstRow,
  modalTitle,
  closeModal,
  body,
  OutfitWrapperDiv,
  carouselWrapperDiv,
  carouselDiv,
  cardComponentDiv,
  nextComponentDiv,
  prevComponentDiv,
  cardImg,
  navOutfitButtons,
  navButtons,
  modalDiv,
  table,
  tableData,
  tableHeader,
  salePrice,
  defaultPriceStrike,
  outfitCardComponentDiv,
};

export default styles;
