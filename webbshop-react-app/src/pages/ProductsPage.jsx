import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [setAlert] = useState("");


  const addToCart = (product) => {
    let addIt = true
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) addIt = false
    }
    if (addIt) setCart([...cart, product]);
    else setAlert(`${product.title} is already in your cart!`);
  };
  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  };

  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await fetch("https://codexplained.se/shoes.php");
    const responseJson = await response.json();
    setProducts(responseJson);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const cartItem = cart.map((product) => (
    <div key={product.id}>
      {`${product.title}: $${product.price}`}
      <input
        type="submit"
        value="remove"
        onClick={() => removeFromCart(product)}
      />
    </div>
  ));

  const productElements = products.map((product) => {
    return (
      <div key={product.id}>
        <Row>
          <Link to={`/product/${product.id}`}></Link>
          <Col>
            <Card
              style={{
                margin: "10px",
                width: "100%",
                height: "100%",
                display: "flex",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={product.url}
                onClick={() =>
                  window.open("ProductSinglePage", "ProductSinglePage")
                }
              />
              <Card.Body style={{ paddingBottom: "20px" }}>
                <Card.Title>
                  <h3>{product.title}</h3>
                </Card.Title>
                <Card.Text className="text-truncate">
                  <span>{product.description}</span>
                </Card.Text>
                <Card.Text> $ {product.price}</Card.Text>
                <Card.Text>In Stock {product.storage}</Card.Text>
                {cartItem}
                <Button
                  type="submit"
                  value="add"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  type="submit"
                  value="remove"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  });

  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        {productElements}
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
}

export default ProductsPage;
