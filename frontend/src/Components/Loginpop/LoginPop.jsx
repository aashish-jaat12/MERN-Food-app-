import  { useContext, useState } from 'react'
import './Loginpop.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets}  from '../../assets/assets'
import { StoreContext } from '../../Context/Storecontext'



function LoginPop({ setLoginpap }) {
const {  settoken} = useContext(StoreContext)
    const [current , setcurrent] = useState("Log-in")
const  [name , setname]= useState("")
const  [email , setemail]= useState("")
const  [password , setpassword]= useState("")

   
const onlogin = async(e)=>{
    e.preventDefault()
      let URL
    if(current === "Log-in"){

        URL = "http://localhost:3000/api/user/login"
    }else{
        URL =  'http://localhost:3000/api/user/Registration'
    }
    
    const responce = await  axios.post(URL, {name:name ,email:email , password:password})
console.log(responce)
    if(responce){
        settoken(responce.data.token)
       localStorage.setItem("token" , responce.data.token)
       setLoginpap(false)
      

    }
    else{
        alert("Error......")
    }
}
    return (

        <div className="popups">
            <div className="popup-contents">
                <div className='popup-title'  >
                    <h2>{current}</h2>
                    <img onClick={() => setLoginpap(false)} src={assets.cross_icon} alt="" />
                
               </div>
           <div className="login-popup-input">
           
            {current==="Log-in"?<></>:<input type='text' placeholder='Your name' name='name' value={name.name} onChange={(e)=>setname(e.target.value)} required></input>}
            <input type="email" placeholder='Your email' required name='email' value={email.email} onChange={(e)=>setemail(e.target.value)} />
            <input type="password" placeholder='enter your password' name='password' value={password.password} onChange={(e)=>setpassword(e.target.value)} required />
            </div>
            <button type='submit' onClick={onlogin}>{current==="Sign Up"? "Create Account": "Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {current=="Log-in"? <p>Create a new account? <span onClick={()=>setcurrent("Sign Up")}>Click here</span> </p>: <p>Already have an account?     <span onClick={()=>setcurrent("Log-in")}>Login here</span> </p>}
           
           
        </div>
        
        </div>
    )
}

export default LoginPop
