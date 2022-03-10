import React, { useState } from 'react'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

function Cart({ tasks, setTasks }) {
  const [showShoppingBag, setShoppingBag] = useState(true)

    setTasks(list)

  let totalSum = 0;

  const productSum = () => {
    tasks.forEach((item) => {
      totalSum += item.price * item.qty
    })
  }

  productSum();

  

  return (
    <div className="Dropdown">
      <ShoppingCartOutlined onClick={() => setShoppingBag(!showShoppingBag)} className="showShoppingBag" />

      {
        showShoppingBag 
          ? <div className="listlist">
            {tasks.map(task => (
              <span className="cartList"
                key={task.id}>
                <img className="picList" src={task.img} alt={task.title}></img>
                <p className="titleList">{task.title}</p>
                <p className="priceTag">{task.price} :-</p>
                
        
              </span>
            ))}
            <div className="totalContainer"> {/* container för knapparna längst ner i cart samt total summa */}
              <p> Summa {totalSum}:-</p>
              <Link to="/Checkout"><button className="toCheckout">Checkout </button></Link>
            </div>
          </div>

          : null /* TOGGLE = där den inte visas, visas null */
      }

    </div>
  )
}
export default Cart