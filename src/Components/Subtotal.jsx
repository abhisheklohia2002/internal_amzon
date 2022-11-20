import React from 'react'
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';
export const Subtotal = () => {
    const [{basket},dispatch] = useStateValue();
    const nav = useNavigate();
const GetBack = ()=>{
nav("/payment")
}
  return (
    <>
    
    <div className='subtotal'>
<CurrencyFormat renderText = {(value)=>(
    <>
    <p>
        Subtotal({basket.length} items): <strong>
            {/* {`$(value)`} */}
            {value}
        </strong>

    </p>
    <small className='subtotal__gift'>
        <input type="checkbox"  />
        This order contains a gift

    </small>
    
    
    </>
)}

decimalScale = {2} value = {
    getBasketTotal(basket)
    // 0
}
displayType = {"text"}

thousandSeparator = {true}
prefix = {"$"}

/>
<button onClick={GetBack}>Proceed to Checkout</button>

    </div>
    
    </>
  )
}
