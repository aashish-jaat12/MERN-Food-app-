// import React from 'react'
import './List.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function List() {
  const [list, setlist] = useState([])

  const fetchlist = async () => {


    const responce = await axios.get('http://localhost:3000/api/food/foodlist')
     
    if (responce.data.success) {

      setlist(responce.data.data)
    } else {
      toast.error("error")
    }
  }

const removeitem = async (id)=>{

  const remove = await axios.post(`http://localhost:3000/api/food/removefood`, {id})
 await fetchlist()
  if(remove.data.success){
    toast(remove.data.message)
   
  }

}


  useEffect(() => {
    fetchlist()
  }, [])
  return (
    <>

        
      <div className='container m-1 mt-3 table-responsive table-responsive-sm table-responsive-md  ' >
      <h4>All Food List</h4>
        <table className='table table-hover booder'>
          <thead className='  text-heding '>
            <tr>
              <th scope='col'>Image</th>
              <th scope='col'>Name</th>
              <th scope='col'>Category</th>
              <th scope='col'>Price</th>
              <th scope='col'>Action</th>
            </tr>

          </thead>
          <tbody className=' text-dark text-bdy'>

            {list.map((e, index) => {
              return ( 
              <tr key={index}>
                
                <td> <img  className=" rounded-circle"  src= {`http://localhost:3000/images/` + e.image }  alt="food.." /> </td>
                <td>{e.name}</td>
                <td>{e.category}</td>
                <td>{e.price}</td>
                <td onClick={()=>{removeitem(e._id)}}  style={{cursor: "pointer"}}>X</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    
    </>
  )
}

export default List
