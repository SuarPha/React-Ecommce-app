import React from 'react'
import { Link } from 'react-router-dom'

function ProductsChild(props) { 

let qty = 1

 const handleClick = (e) => {
        e.preventDefault();
            const newProduct = {
                id: props.products.id,
                img: props.products.url,
                title: props.products.title,
                price: props.products.price,
                qty: parseInt(document.getElementById(props.products.id + "-quantity").value)
            }
    props.addProduct(newProduct);
    qty = 1;

    }
    
    return (
        <div>
            <article className="cardBox"> 
                <img src={props.products.url} alt={props.products.title}></img>
                <p>
                    {props.products.title}  
                    <br/>
                    {props.products.price} :-
                </p>
                <form onSubmit={handleClick}>
                <input type="number" defaultValue={qty} id={props.products.id + '-quantity'}></input>
                <button  className="addToCartBtn" >Add to cart</button>
                <Link to={`/products/${props.products.id}`}><button className="readMoreBtn">Read more</button></Link>
                </form>
            </article>
        </div>
    )
}

export default ProductsChild