import React from 'react'
import { useStateValue } from '../StateProvider'
import "./check.css"
import { CheckoutProduct } from './CheckoutProduct'
import { Subtotal } from './Subtotal'
export const Checkout = () => {
  const [{basket,user},dispatch] = useStateValue()
  return (
    <div className='checkout'>
<div className="checkout__left">
<img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg" alt="background img" />



<div>
    <h2 className="checkout__title">
      Your Shooping Basket
    </h2>

{/* <CheckoutProduct/> */}
{
  basket.map(item=>(
    <CheckoutProduct title = {item.title}
    image = {item.image}
    price = {item.price}
    rating = {item.rating}
     />
  ))
}

</div>
</div>

<div className="checkout__right">
<Subtotal/>
    
</div>
    </div>
  )
}
