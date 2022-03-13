import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";

const Container = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
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
const Price = styled.h3`
  width: 50%;
  margin: 30px 0px;
`;
const Storage = styled.span`
  color: green;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

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

function ProductSinglePage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  async function getProduct(theProductId) {
    const response = await fetch("https://codexplained.se/shoes.php?id=234967");
    const responseJson = await response.json();
    setProduct(responseJson);
  }
  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity}));
  };

  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Wrap>
            <ImgContainer>
              <Image src={product.url} alt="" />
            </ImgContainer>
          </Wrap>
          <Wrap>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <PriceContainer>
              <Price>$ {product.price}</Price>
            </PriceContainer>
            <Storage>In Stock {product.storage}</Storage>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
          </Wrap>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
}

export default ProductSinglePage;
