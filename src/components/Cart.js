import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import "../components/Cart.css"


function Cart({ tasks }) {
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
       <ShoppingCartOutlined onClick={() => setShoppingBag(!showShoppingBag)} className="showingShoppingBag" /> 

      {
        showShoppingBag 
          ? <div className="list">
            {tasks.map(task => (
              <span className="Cart"
                key={task.id}>
                <img className="Pic" src={task.img} alt={task.title}></img>
                <p className="Title">{task.title}</p>
                <p className="Price">{task.price} :-</p>
                
        
              </span>
            ))}
            <div className="totalContainer"> 
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