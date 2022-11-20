import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { auth } from '../Firebase';

export const Login = () => {
const nav = useNavigate();


    const [email,setemail]  = useState("");
  const [pass,setpass] = useState('');
  const [visibles, setvisible ]  = useState(false);


    const HandleClick = (e) => {
        e.preventDefault();
auth.signInWithEmailAndPassword(email,pass)
.then(auth=>{
    nav("/");
    console.log(auth)
}).catch(err=>{
    console.log(err)
})
    }
    const Register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,pass)
.then(auth=>{
console.log(auth);

if(auth){
    nav("/");

}
}).catch(err=>{
    console.log(err)
})
    }


    var odd= 1;
    const visible = () => {
var reverse= false;



(odd%2==1)?setvisible(reverse):setvisible(true);
odd++;


       



    }
  return (
    <div className='login'>
      <Link to = "/">
       <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" /> 
      </Link>
    
<div className="login_container">
    <h1>Sign-in</h1>

    <form action="">
        <h5>
            E-mail
        </h5>
        <input value = {email} onChange = {e=>setemail(e.target.value)} type="text" />


        <h5>
           Password
        </h5>
        <input value  = {pass} onChange = {e=>setpass(e.target.value)} type={visibles?"text":"password"} /> <VisibilityIcon onClick = {visible} className = "visible"/>
        
<br />
        <button  onClick={HandleClick} className='sign_button'>
            Sign In
        </button>
        <p>
            By Signing-in Your agree to Amazon's conditions of Use & Sale.Please see our Privacy Notice ,our Cookies Notice and our Interest-Based Ads
        </p>
        <button onClick={Register}  className='login_create'>
            Create new Account
        </button>
    </form>
</div>


    </div>
  )
}

