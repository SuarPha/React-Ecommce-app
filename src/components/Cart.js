import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../components/ProductsChild.css"

function Cart({ tasks}) {
  const [showShoppingBag, setShoppingBag] = useState(true)


  let totalSum = 0;

  const productSum = () => {
    tasks.forEach((item) => {
      totalSum += item.price * item.qty
    })
  }

  productSum();

  

  return (
    <div className="Dropdown">
      <button onClick={() => setShoppingBag(!showShoppingBag)} className="showShoppingBag" />

      {
        showShoppingBag 
          ? <div className="list">
            {tasks.map(task => (
              <span className="art"
                key={task.id}>
                <img className="Pic" src={task.img} alt={task.title}></img>
                <p className="Title">{task.title}</p>
                <p className="Price">{task.price} :-</p>
                
        
              </span>
            ))}
            <div className="totalContainer"> {}
              <p> Summa {totalSum}:-</p>
              <Link to="/Checkout"><button className="toCheckout">Checkout </button></Link>
            </div>
          </div>

          : null 
      }

    </div>
  )
}
export default Cart