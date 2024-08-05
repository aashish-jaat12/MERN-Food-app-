import  { useState } from 'react' 
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import Card from './pages/Cart/Card'

import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPop from './Components/Loginpop/LoginPop'
import Verify from './pages/Verifys/Verify';
import Myorder from './pages/Myorder/Myorder';
import Trackorder from './pages/Trackorder/Trackorder';

function App() {
  const [loginpop , setLoginpap] = useState(false)
  return (
    <div>
      {loginpop?<LoginPop setLoginpap={setLoginpap}/>:<></>}
      <ToastContainer/>
      <Navbar setLoginpap={setLoginpap} />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
        <Route path='/order' element={<Placeorder/>}></Route>
        <Route path='/verify' element={<Verify/>}></Route>
        <Route path='/myorder' element={<Myorder/>}></Route>
        <Route path='/Trackorder' element={<Trackorder/>}></Route>
        
        

      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
