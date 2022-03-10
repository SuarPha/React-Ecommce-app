import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'


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
const Navbar = () => {
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
                </Left>
                <Center>
                    <Logo>
                        LA SK.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <ShoppingCartOutlined />
                    </MenuItem>
                </Right>
            </Wrapper>
            
        </Container> 
    
  )
}

export default Navbar;