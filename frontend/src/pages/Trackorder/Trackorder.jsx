import React, { useState, useEffect, useContext } from "react";
import "./Trackorder.css";
import axios from "axios";
import { StoreContext } from "../../Context/Storecontext";
import { assets } from "../../assets/assets";
import { useLocation } from 'react-router-dom';


function Trackorder() {
  const location = useLocation();
  const [orders, setOrder] = useState();
  const { token, url } = useContext(StoreContext);
  const { id } = location.state || { message: 'No message recived' };

  useEffect(() => {
    const fetchOrderData = async () => {
      const responce = await axios.get(`${url}/api/order/userorder`, {
        headers: { token },
      });
      setOrder(responce.data.data);
    };
    fetchOrderData();
  }, []);

  if (!orders) return <div>Loading...</div>;

  return (
    <div className="order-tracking">
      <div className="order-status"> 
        <h2>Order Tracking</h2>

        {orders.map((order, index) => (
          order._id === id ? (
             <div key={index}>
              
              <ul>
                <div className={`order-statuss`}>
                  <li>
                    {order.payment === false ?  <div style={{color: 'red', fontWeight: '600'}} className={`status-location `}>COD-{order.amount}$</div>: <div>Pay-0$</div>}

                    <div className={`status-location ${order.status === "Food Processing" ,"Out for delivery" , "Delivered" ? 'active' : null}`}>Food Processing {order.status === "Food Processing" || order.status === "Out for delivery" ||order.status === "Delivered" ? <img className="img" src={assets.trackorder} ></img>  : null}</div>

                    <div className={`status-location ${order.status === "Out for delivery" ||order.status ===  'Delivered' ? 'active' : ''}`}>out for delivery { order.status === "Out for delivery" ||order.status === "Delivered" ? <img className="img" src={assets.trackorder} ></img>  : null}</div>
                    
                    <div className={`status-location ${order.status === "Delivered" ? 'active' : ''}`}>Deliverd{order.status === "Delivered" ? <img className="img" src={assets.trackorder} ></img>  : null}</div>
                  </li>
                </div>
              </ul>
            </div>)
       :null
        ))}
      </div>
    </div>
  );

  //   return (s
  //     <>

  //       <div className="order-tracking">
  //         <div className="order-status">
  //           <h2>Order Status</h2>
  //           <div className="order-status">
  //       <div className="progress-bar">
  //         {statuses.map((status, index) => (
  //           <div key={index} className={`status-item ${currentStatus === status ? 'active' : ''}`}>
  //             <div className={`status-circle ${currentStatus === status ? 'active' : ''}`}></div>
  //             <div className="status-label">{status}</div>
  //           </div>
  //         ))}
  //       </div>
  //       <ul>
  //         {trackingHistory.map((status, index) => (
  //           <li key={index}>
  //             <div className="status-date">{status.date}</div>
  //             <div className="status-location">{status.location}</div>
  //             <div className="status-description">{status.status}</div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //         </div>
  //       </div>
  //     </>
  //   );
}

export default Trackorder;
