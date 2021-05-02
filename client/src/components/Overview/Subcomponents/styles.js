/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* for overview */

// overview
// product information
// image gallery
// style selector
// add to cart

// General

const overview_default = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 8vh 82vh 15vh;
  grid-gap: 10px;
  grid-template-areas:
    "header header header header header header"
    "main main main main sidebar sidebar"
    "footer footer footer footer footer footer"
`;

const overview_expanded = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 8vh 82vh 15vh;
  grid-gap: 10px;
  grid-template-areas:
    "header header header header header header"
    "main main main main main main"
    "footer footer footer footer footer footer"
`;

const dark_mode = styled.div`
  background-color: #353131;
  color: white;
`;

const header = styled.div`
  grid-area: header;
  text-align: center;
  font-size: medium;
  padding-bottom: 3px;
`;

const navbar = styled.div`
  background-color: black;
  height: 25px;
  text-align: left;
  color: white;
  padding: 10px;
`;

const navbar_dark = styled.div`
 background-color: white;
 height: 25px;
 text-align: left;
 color: black;
 padding: 3px;
`;

const button_dark = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  height: 20px;
  width: 50px;
  font-family: Helvetica;
  font-size: 0.8em;
`;

const header_right = styled.div`
  display: block;
  text-align: right;
`;

const shopping_bag = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  height: 20px;
  width: 50px;
  font-family: Helvetica;
  font-size: 0.8em;
  background-color: #2ada71;
`;

const search = styled.div`
  position: absolute;
  top: 60px;
  right: 80px;
`;

const header_below = styled.div`
  text-align: center;
  font-size: small;
  padding: 3px;
`;

const main = styled.div`
  grid-area: main;
  padding: 5px;
  margin: 5px;
`;

const main_expanded = styled.div`
  grid-area: main;
  padding: 5px;
  margin: 5px;
`;

const expand_view = styled.div`
  position: absolute;
  top: 0%;
  right: 32px;
  font-size: 2rem;
`;

// image gallery

const slider = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const image = styled.div`
  max-width: 100%;
  max-height: 82vh;
`;

const image_expanded = styled.div`
  max-width: 100%;
  max-height: 82vh;
  transform: scale(2);
`;

const img_wrapper = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const left_arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 2rem;
  z-index: 10;
`;

const right_arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 2rem;
  z-index: 10;
`;

const slider_vertical = styled.div`
  position: absolute;
  display: inline-block;
  left: 10%;
`;

const image_vertical = styled.div`
  max-width: 15%;
  max-height: 15%;
  padding: 5px;
`;

const img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
`;

const sidebar = styled.div`
  grid-area: sidebar;
  padding: 5px;
  margin: 5px;
`;

// product information

const product_information = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
`;

// style selector

const title_size = styled.div`
  font-size: 2.3em;
  letter-spacing: 0.08em;
  font-family: 'Bebas Neue', cursive;
`;

const style_selector = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
`;

const circle = styled.div`
  display: inline-block;
`;

// add to cart

const add_to_cart = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
`;

const select_size = styled.div`
  width: 150px;
  height: 30px;
  padding: 2px;
  margin: 2px;
`;

const select_quantity = styled.div`
  width: 150px;
  height: 30px;
  padding: 2px;
  margin: 2px;
`;

const button_bag = styled.div`
  width: 220px;
  height: 50px;
  padding: 2px;
  margin: 2px;
  font-family: Helvetica;
  font-size: 0.8em;
  background-color: black;
  transition: outline 0.1s linear;
  color: white;
`;

const button_outfit = styled.div`
  width: 80px;
  height: 50px;
  padding: 2px;
  margin: 2px;
  font-family: Helvetica, Arial;
  font-size: 0.8em;
`;

const selection_box_font = styled.div`
  font-family: Helvetica, Arial;
  font-size: 0.9em;
`;

const footer = styled.div`
  grid-area: footer;
  padding: 5px;
  margin: 5px;
`;

const styles = {
  overview_default,
  overview_expanded,
  header,
  navbar,
  search,
  main,
  main_expanded,
  expand_view,
  slider,
  image,
  image_expanded,
  img_wrapper,
  left_arrow,
  right_arrow,
  slider_vertical,
  CardWrapper,
  image_vertical,
  img,
  sidebar,
  product_information,
  style_selector,
  circle,
  add_to_cart,
  select_size,
  select_quantity,
  button_bag,
  button_outfit,
  footer,
};

export default styles;
