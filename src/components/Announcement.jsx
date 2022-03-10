import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #2b787e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 300;
`

const Announcement = () => {
  return (
    <Container>
        Nice Deal! Free Shipping on Order Over $50
    </Container>
  )
};

export default Announcement;