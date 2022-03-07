import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div``;
const Image = styled.img`
  width: 500px;
  height: 550px;
  padding-top: 20px;
  padding-bottom: 25px;
  margin-left: 10%;
`;
const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
`;
const Desc = styled.span`
  font-family: "Urbanist", sans-serif;
`;
const Price = styled.div``;
const Currency = styled.div``;
const Storage = styled.div``;

const FilterContainer = styled.div``;

const FilterTitle = styled.div``;
const Select = styled.select``;
const Option = styled.option``;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const AddContainer = styled.div``;
const AmountContainer = styled.div``;
const Amount = styled.div``;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #258eff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #5fa076;
    color: #333;
  }
`;
const Product = () => {
  const specificProduct = {
    id: 234967,
    img: "https://images.pexels.com//photos//19090//pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Blue summer shoes",
    desc: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
    price: 499,
    currency: "$",
    storage: 13,
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={specificProduct.img} alt="" />
        </ImgContainer>
        <Wrap>
          <Title>{specificProduct.title}</Title>
          <Desc>{specificProduct.desc}</Desc>
          <PriceContainer>
            <Price>{specificProduct.price}</Price>
            <Currency>{specificProduct.currency}</Currency>
          </PriceContainer>

          <Storage>In Stock {specificProduct.storage}</Storage>
          <FilterContainer>
            <FilterTitle>Size</FilterTitle>
            <Select>
              <Option disable selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Navy</Option>
            </Select>

            <FilterTitle>Size</FilterTitle>
            <Select>
              <Option disable selected>
                Size
              </Option>
              <Option>38/2</Option>
              <Option>39</Option>
              <Option>40</Option>
              <Option>40/2</Option>
              <Option>41</Option>
              <Option>42</Option>
            </Select>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </Wrap>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
