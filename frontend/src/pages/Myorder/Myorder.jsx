import axios from 'axios'
import './Myorder.css'
import  { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/Storecontext'
import { assets } from '../../assets/assets'

function Myorder() {
    const { token, url } = useContext(StoreContext)
    const [myorder, setmyorder] = useState([])

    const myorders = async () => {

        const responce = await axios.get(`${url}/api/order/userorder`, { headers: { token } })
        setmyorder(responce.data.data)
        console.log(responce.data.data)

    }

    useEffect(() => {
        if (token) {
            myorders()
        }
    }, [token])
    return (
        <div className='my-orderss'>
             <h2>My Order</h2>
            <div className='containerss'>
           
        {myorder.map((order, index) => {
                    return (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " X " + item.quantity
                                } else {
                                    return item.name + " X " + item.quantity + " ,"
                                } })}</p>
                                <p>${order.amount}.00</p>
                                <p>Item : {order.items.length}</p>
                                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                                <button onClick={myorders } >Track Order</button>

                        </div>

                    )


                })}

            </div>

        </div>
    )
}

export default Myorder
