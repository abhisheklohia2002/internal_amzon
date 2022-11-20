import React from 'react'
import { Header } from './Header';
import "./home.css"
import { Product } from './Product';
const Home = () => {
    const img = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg";

  return (
   <>  
 
   <div className='container'>
     <div className='home' >
      <div className='home_container'>
       <img className='img_banner' src="https://wallpaperaccess.com/full/6385958.jpg" alt="banner" />

<div className="home_row">
<Product title = "The lean Startup" image = {img} price = {29.99}  rating = {3}/>
<Product title  = "Rich Dad Poor Dad" image = "https://m.media-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg" price = {7.61} rating  = {4}  />



</div>
<div className="home_row">
<Product title  = "LG Tone NP3 Wireless Stereo Headset with Retractable Earbuds" image = "https://m.media-amazon.com/images/I/71+nxanQRpL._AC_SX522_.jpg" price = {56} rating  = {3}  />
<Product title  = "LG TONE Free FP9 - Active Noise Cancelling True Wireless Bluetooth Earbuds" image = "https://m.media-amazon.com/images/I/5199Nx6s01L.__AC_SY300_SX300_QL70_FMwebp_.jpg" price = {96} rating  = {2}  />
<Product title  = " Active Noise Cancelling True Wireless Bluetooth Earbuds" image = "https://m.media-amazon.com/images/I/61D0l4IL0CL._AC_SL1500_.jpg" price = {88} rating  = {3}  />


</div>
<div className="home_row">
<Product title = "AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV with Dolby Atmos and Dolby Vision (Black)" image = "https://m.media-amazon.com/images/I/71yXsr9bBhL._SL1500_.jpg" price  = {150} rating = {3} />

</div>


      </div>



    </div>
    </div>
    </>

  )
}

export default Home;
