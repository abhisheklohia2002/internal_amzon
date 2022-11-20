import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './Components/Reducer';
ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter> <React.StrictMode>
   <StateProvider initialState={initialState} reducer = {reducer}>
   <App />
   </StateProvider>  
  </React.StrictMode>
  </BrowserRouter>
 
)
