import styled from "styled-components"
import {Facebook, Instagram, MailOutline, Phone, PinDrop, Pinterest, Twitter } from "@material-ui/icons";
import payment from "../image/payment.png"


const Container = styled.div`
    display: flex;
    background-color: #fff;
`;
const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
`;
const Logo = styled.h1`
        
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-family: 'Urbanist', sans-serif;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    &:hover{
        background-color: #818181;
    }
`;

const Center = styled.div`
      flex: 1;
      padding: 20px;
`;

const TitleInfo = styled.h2`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
`;
const Right = styled.div`
      flex: 1;
      padding: 20px;
`;
const ContactTitle = styled.h2`
    padding-top:20px 0px;
`;

const ContactInfo = styled.div`
    padding-top:10px;   
    padding-bottom: 5px;
    font-family: 'Urbanist', sans-serif;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 70%;
`;

const CopyRighter = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgb(43,120,126);
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
`;
    
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LA SK.</Logo>
            <Desc>Add anything to your basket with no extra shipping charge,
                or do your weekly shop with us. 
                The choice is yours.There is no minimum spend or quantity.
                 We want to make it easy to shop vegan.
            </Desc>
            <SocialContainer>
            <SocialIcon color="3b5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color= "e4405f">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="e60023">
                <Pinterest/>   
            </SocialIcon >
            <SocialIcon color="55acee">
                <Twitter/> 
            </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <TitleInfo>FAQ Links</TitleInfo>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Payment</ListItem>
                <ListItem>Order Tracking</ListItem>
            </List>
        </Center>
        <Right>
            <ContactTitle>Contact</ContactTitle>
            <ContactInfo>
                <PinDrop style ={{marginRight:"10px"}}/> 2478 Palm Path, South Stockholm, 7895
            </ContactInfo>
            <ContactInfo>
                <Phone style ={{marginRight:"10px"}}/> +123 456 789
            </ContactInfo>
            <ContactInfo>
                <MailOutline style ={{marginRight:"10px"}}/> customerservice@lask.com
            </ContactInfo>
            <Payment src={payment} alt="" />
                
        </Right>
        <CopyRighter>
            <p>Copyright &copy; 2022</p>
        </CopyRighter>
    </Container>
  )
};

export default Footer;