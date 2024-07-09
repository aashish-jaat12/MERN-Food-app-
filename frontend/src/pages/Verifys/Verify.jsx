import React from 'react'
import { useEffect } from 'react'
import './Verifys.css'
import {useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Verify() {
 
    const [searchParams, setsearchParams] = useSearchParams()
    const navigate = useNavigate()

    const success = searchParams.get("success")
    const orderid = searchParams.get("orderid")
    const verifyorder= async()=>{

      const responce = await axios.post("http://localhost:3000/api/order/verify",{success, orderid})
console.log(responce)
      if(responce.data.success){
        navigate('/myorder')
}else{
  navigate('/')
 
}


    }

    useEffect(()=>{
      verifyorder()
    },[])

  return (
    <div className='verify'>
       <div className='spinner'></div>
    </div>
  )
}
  


export default Verify




