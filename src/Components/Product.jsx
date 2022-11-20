import React from 'react'
import { useStateValue } from '../StateProvider';
import "./product.css";

export const Product = ({title,image,price,rating}) => {
const [{basket} , dispatch] = useStateValue();
const addToBasket = ()=>{
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
    title:title,image:image,price:price,rating:rating
    }
  })
}

  return (
    <div className='product'>
        
      <div className="product-info">
        <p>
{title}
        </p>
<p className="product_price">
    <small>$</small>
    <strong>
        {price}
    </strong>
</p>
<div className="product_rating">
   {Array(rating).fill().map((_,i)=>(
<p>⭐</p>

   ))} 

</div>
        </div>  

<img src= {image} alt="" />

<button onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}
