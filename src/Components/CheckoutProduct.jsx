import React from 'react'
import { useStateValue } from '../StateProvider'
import "./checkoutproduct.css"
export const CheckoutProduct = ({title,image,price,rating}) => {
  const [{basket},dispatch] = useStateValue();

  const RemoveBasket = () => {
dispatch({
  type: "REMOVE_FROM_BASKET",
  
})
  }
  return (
    <div className='checkoutProduct'>

        <img className='checkoutProduct_image' src={image} alt={title} />



        <div className="checkoutProduct_info">

            <p className='checkoutProduct_title'>
                {title}
            </p>

            <p className="checkProduct_price">
               <small>
                $
               </small>
               <strong>
               {price}
               </strong>
            </p>

            <p className="checkoutProduct_rating">
               {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>

               ))}
            </p>

            <button onClick={RemoveBasket} className="remove">
              Remove from Basket
            </button>
        </div>
    </div>
  )
}
