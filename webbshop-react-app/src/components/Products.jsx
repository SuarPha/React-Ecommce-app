import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { popularItem } from "../data";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Product from "./Product";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 65vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
`;

const InfoTitle = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Products = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <InfoTitle>Popular Products</InfoTitle>
        <Wrapper>
          {popularItem.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </Wrapper>
        <Footer />
      </Container>
    </div>
  );
};

export default Products;
