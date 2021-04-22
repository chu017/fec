/* for overview */

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

const header = styled.div`
  grid-area: header;
  text-align: center;
  font-size: small;
  padding: 3px;
`;

const navbar = styled.div`
  background-color: black;
  height: 25px;
  text-align: left;
  color: white;
  padding: 5px;
`;

const search = styled.div`
  display: grid;
  text-align: right;
`;

const main = styled.div`
  grid-area: main;
  /* border: 2px solid red; */
  padding: 5px;
  margin: 5px;
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
`;

const main_expanded = styled.div`
  grid-area: main;
  /* border: 2px solid red; */
  padding: 5px;
  margin: 5px;
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
`;

const expand_view = styled.div`
  position: absolute;
  top: 0%;
  right: 32px;
  font-size: 2rem;
`;

const slider = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  /* border: 2px solid red; */
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
  /* border: 2px solid red; */
  /* top: 20%; */
  left: 10%;
`;

const CardWrapper = styled.div`
  @media only screen and (max-width: 1440px) {
    .slider-vertical {
        display: none;
    }
  }
`;

const image_vertical = styled.div`
  /* border: 2px solid red; */
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
  /* border: 2px solid red; */
  padding: 5px;
  margin: 5px;
`;

const product_information = styled.div`
  display: block;
  /* border: 2px solid red; */
  padding: 5px;
  margin: 5px;
`;

const style_selector = styled.div`
  display: block;
  /* border: 2px solid red; */
  padding: 5px;
  margin: 5px;
`;

const circle = styled.div`
  display: inline-block;
`;

const add_to_cart = styled.div`
  display: block;
  /* border: 2px solid red; */
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
  background-color: black;
  color: white;
`;

const button_outfit = styled.div`
  width: 80px;
  height: 50px;
  padding: 2px;
  margin: 2px;
`;

const footer = styled.div`
  grid-area: footer;
  /* border: 2px solid red; */
  padding: 5px;
  margin: 5px;
`;

const product_information_footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
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
  product_information_footer,
};

export default styles;
