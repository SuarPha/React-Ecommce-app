import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



const Container = styled.div`
    background-color: #f6f6f6;
   `;

const TitlePage = styled.h1`
    margin: 25px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border-radius: 5px;
`;
const Option = styled.option`
    font-family: 'Urbanist', sans-serif;
`;
const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <TitlePage>SHOES</TitlePage>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select >
                <Option disable selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Navy</Option>
                </Select>
                <Select >
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
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price(asc)</Option>
                    <Option>Price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter />
        <Footer/>
    </Container>
  )
}

export default ProductList;