import  { useContext } from 'react'
import { StoreContext } from '../../Context/Storecontext'
import './Cart.css'
import {useNavigate} from  'react-router-dom'
function Card() {
  const { food_list, itemcart, removeitem , gettotalamount} = useContext(StoreContext)
  const navigat = useNavigate()
  return (
    <div className='cards m-5'>
      <div className='card-item'>
        <div className='all-card-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item , index) => {

            if (itemcart[item._id] > 0) {
              return ( 
                <>
                  <div className='all-card-title cart-items-item' key={index}>
                    <img src={`http://localhost:3000/images/`   +  item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{itemcart[item._id]}</p>
                    <p>${item.price * itemcart[item._id]}</p>
                    <p onClick={() => removeitem(item._id)} className='remove'>X</p>
                  </div>
                  <hr />
                </>
              )
            }


          })
        }
      </div>
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
           
            <button onClick={()=> navigat('/order')} >PROCEED TO CHECKOUT</button>
      
         </div>
        
      <div className='carts-promocode'>
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className='cards-prompcode-imput'>
            <input type="text" placeholder='Promo code' />
            <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </div>
    </div> 
  )
}

export default Card
