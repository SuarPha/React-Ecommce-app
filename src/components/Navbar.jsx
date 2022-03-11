import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import Cart from './Cart'
import "../components/ProductsChild.css"


const Container = styled.div`
    height : 60px;
    background-color: #fff;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    font-size: 600;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
`;
function Navbar(props) {
  return (
    
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <SearchIcon style={{color:"gray"}} />
                    </SearchContainer>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>HOME</Link> 
                    <span>
                    <button className="cartBtn">CART</button>
                    </span>
                </Left>
                <Center>
                    <Logo>
                        LA SK.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                </Right>
            </Wrapper>
        </Container> 
    
  )
}

export default Navbar;