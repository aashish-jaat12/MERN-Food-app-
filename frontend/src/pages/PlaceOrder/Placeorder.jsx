import  { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/Storecontext'
import "./Placeorder.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Placeorder() {
  const {gettotalamount, token , food_list, itemcart, url} = useContext(StoreContext)

  const Navigate =useNavigate()

  const [data , setdata] = useState({
    firstName:"",
    lastName: "",
    email: "",
    Street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

const placeorder = async (e)=>{
e.preventDefault()  

let orderitems = []
food_list.map((item)=>{
    if(itemcart[item._id]>0){
      let iteminf = item;
      iteminf["quantity"] = itemcart[item._id]
      orderitems.push(iteminf);
    }
})

const orderdata ={
  address: data,
  items: orderitems,
  amount: gettotalamount() + 2
}



const responce = await axios.post(`${url}/api/order/placeOrder`, orderdata , {headers: {token}})
if(responce){
  const {session_url} = responce.data;
 
  window.location.replace(session_url)
}
else{
  alert('error')
}

}

useEffect(()=>{
if(!token){
  Navigate('/card')
} else if(gettotalamount() === 0){
  Navigate('/card')
}
},[token])

  const onchange =(e)=>{
const name= e.target.name;
const value = e.target.value
setdata (data=>({...data, [name]:value}))
  }
  return (
    <>
   <form onSubmit={placeorder} className='place-order m-5'>
    <div className='order-left'>
      <p className='title'>Delivery Information</p>
      <div className='multi-fields'>
        <input required type="text" name='firstName' value={data.firstName} onChange={onchange} placeholder='First name' />
        <input required type="text" name='lastName' value={data.lastName} onChange={onchange} placeholder='Last name' />
      </div>
      <input required type="email"name='email' value={data.email} onChange={onchange} placeholder='Email Address' />
      <input required type="text" name='Street' value={data.Street} onChange={onchange} placeholder='Street' />
      <div className='multi-fields'>
        <input required type="text" name='city' value={data.city}  onChange={onchange}  placeholder='City' />
        <input required type="text"name='state' value={data.state} onChange={onchange}  placeholder='State' />
      </div>
      <div className='multi-fields'>
        <input required type="number" name='zipcode' value={data.zipcode} onChange={onchange}  placeholder='Zip code' />
        <input required type="text" name='country' value={data.country} onChange={onchange}  placeholder='Country' />
      </div>
      <input required type="number" name='phone' value={data.phone} onChange={onchange}   placeholder='Phone' />
    </div> 
    <div className='order-right'>
    <div className='carts-bottams'>
        <div className='carts-totals'>
          <h2>Total</h2>
          <div className='carts-total-details'>
            <p>Subtotal</p>
            <p>${gettotalamount()}</p>
            </div>
          
          <div className='carts-total-details'>
            <p>Delivery Fee</p>
            <p>${gettotalamount() === 0 ? 0: 2}</p>
            </div>
        
          <div className='carts-total-details'>
            <b>Total</b>
            <b>${gettotalamount() >0 ? gettotalamount() + 2 : "0"}</b> 
            </div>
           
            <button type='submit' >PROCEED TO PAYMENT</button>
      
         </div>
    </div>
    </div>
   </form>
    </>
  )
}

export default Placeorder
