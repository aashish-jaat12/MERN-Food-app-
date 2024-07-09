// import React from 'react'
import { useState } from 'react'
import './Order.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

function Order() {
  const [lists, setlist] = useState([])

  const allorder = async () => {
    try {
      const responce = await axios.get('http://localhost:3000/api/order/list')
      setlist(responce.data.list)
    } catch (error) {
      toast.error("server err...")

    }
  }

  const updateStatus = async (e, orderid) => {
    

    try {
      const responce = await axios.post('http://localhost:3000/api/order/status', { orderid, Status: e.target.value })
      if (responce) {
        allorder()
        toast.success(responce.data.message)
      }
    } catch (error) {

      toast.error("Server error...")


    }
  }

  useEffect(() => {
    allorder()
  }, [])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {lists.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div><p className='order-item-food'>
              {order.items.map((item, index) => {

                if (index === order.items.length - 1) {
                  return item.name + "x " + item.quantity
                } else {
                  return item.name + "x " + item.quantity + " ,"
                }

              })}
            </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.Street + " ,"}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}  </p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select className='order-item-select' onChange={(e) => updateStatus(e, order._id)}  value={order.status}
              
              >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option> 
            </select>
          </div>

        )

        )}
      </div>

    </div>
  )
}

export default Order
