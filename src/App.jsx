import { useState ,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Components/Header'
import Home from './Components/Home'
import { MyRoutes } from './Components/MyRoutes/AllRoutes'
import { auth } from './Firebase';
import reducer from './Components/Reducer'
import { useStateValue } from './StateProvider'
function App() {
  const [count, setCount] = useState(0);
const [{},dispatch] = useStateValue()

useEffect(()=>{
auth.onAuthStateChanged(authUser => {
  console.log("User Is ",authUser);

  if(authUser){
dispatch({
  type:"SET_USER",user:authUser
})
  }
  else {
      dispatch({
        type : "SET_USER",
        user:null
      })
  }
})
},[])
  return (
    <div className="App">
      <Header/>
   <div className = "home">
    <MyRoutes/>
   </div>
         </div>
  )
}

export default App
