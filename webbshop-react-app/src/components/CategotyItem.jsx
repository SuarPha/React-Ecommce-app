
import styled  from 'styled-components';


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


const Wrapper = styled.h1`
    flex: 1;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    color: #555555;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #f8f8f8;
        transform: scale(1.1);
    }
`;
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Wrapper>
        Categories
        </Wrapper>
        <Image src = {item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>BUY NOW</Button>
        </Info>
        
    </Container>
  )
};

export default CategoryItem; 