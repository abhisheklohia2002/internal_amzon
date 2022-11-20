import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import { CheckoutProduct } from './CheckoutProduct'

import "./payment.css";

export const Payment = () => {
    const [{basket,user},dispatch] = useStateValue()
  return (
    <div className='payment'>

        <div className='payment_container'>
<h1>
    Checkout (
        <Link to = "/checkout">
            {basket?.length}
            item
        </Link>
    )
</h1>

            <div className="payment_section">
<div className="payment_title">
    <h3>Delivery Address</h3>
</div>
<div className="payment_address">
    <p>
        {user?.email}

    </p>
    <p>
        123 react line
    </p>
    <p>
        Los angles Ca
    </p>
</div>
            </div>
            <div className="payment_section">
<div className="payment_title">
<h3>review items and Delivery</h3>

</div>

<div className="payment_item">
    {basket.map(item=>(
        <CheckoutProduct
        title = {item.title}
        image = {item.image}
        price  = {item.price}
        rating = {item.rating}


        />
    ))}
</div>
            </div>
            <div className="payment_section">
<div className="payment_title">
    <h3>
        Payment Method
    </h3>
</div>


<div className="payment-detail">

</div>
            </div>

        </div>


    </div>
  )
}
