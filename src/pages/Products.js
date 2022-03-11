import React, { useState, useEffect } from 'react'
import ProductsChild from '../components/ProductsChild';
import "../components/ProductsChild.css"

function Products(props) {
  const [productList, setProductList] = useState([]); 


  const fetchData = async () => { 
    try {
      const response = await fetch('https://codexplained.se/shoes.php');
      const data = await response.json();
      setProductList(data);

    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
      <div id="parentStyle"> 
      {productList.map(products => <ProductsChild key={products.id} products={products} addProduct={props.addProduct} count={props.count} setCount={props.setCount}  />
      )}
    </div>

  )
}
export default Products
