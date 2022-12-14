import React, { useState } from 'react'
import "./header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';
import reducer from './Reducer';
export const Header = () => {
const [{basket,user} , dispatch ] = useStateValue()

const HandleClickAuth = ()=>{
  if(user){
auth.signOut();

  }
}

  return (
    <div className = "header">
      <Link to  = "/">

       <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /> 
      </Link>




<div className="header_search">
<input className='header_search_input' type="text" name=""/>
<SearchIcon  className= "header_search_icon" />

</div>


<div className="header_nav">

<div onClick = {HandleClickAuth} className='header_option'>
<span className="header_optionLineOne">
 hello Guest
</span>

<span  className="header_optionLineTwo">
<Link  to = {"/login" &&  !user} style={{textDecoration:"none",color:"white"}}>
 {user?"Sign out":"Sign In"}
</Link>
</span>



</div>
<div className='header_option'>

<span className="header_optionLineOne">
   Returns 
</span>
<span className="header_optionLineTwo">
   Order
</span>
</div>
<div className='header_option'>
<span className="header_optionLineOne">
  Your 
</span>


<span className="header_optionLineTwo">
 Prime
</span>
</div>

<Link to = "/checkout">
<div className='header_optionBasket'>
<ShoppingBasketIcon  />
<span className="header_optionLineTwo header_basketCount"> {basket?.length} </span>
</div>

</Link>



</div>

    </div>
  )
}
