import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Checkout } from '../Checkout'
import { Header } from '../Header'
import Home from '../Home'
import { Login } from '../Login'
import { Payment } from '../Payment'

export const MyRoutes
 = () => {
  return (
<>

<Routes>
<Route path = "/" element = {<>

<Home/></>  }/>

<Route path = "/checkout" element = {<Checkout/>}/>

<Route path = "/login" element = {<Login/>} />
<Route path = "/payment" element = {<Payment/>} />
</Routes>


</>
  )
}
