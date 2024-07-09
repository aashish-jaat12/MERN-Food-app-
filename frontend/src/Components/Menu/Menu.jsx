import React from 'react'
import {menu_list} from '../../assets/assets'
import "./Menu.css"

function Menu({setcategory, category}) {
  return (
   
    <>
     <div className="menu contianer m-5" id='menu'>
      <hr />
    <h1 className="card-title mx-1">Explore our menu</h1>
    <h6 className="pera mx-3">Choose from a diverse menu featuring a delectable array of dishes. our mission is to satisfy your craving and elevate your dining experience....</h6>
      <div className="row row-cols-2 card-group g-0 ">
       {menu_list.map((item,index)=>{ 
    return(
    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="card  border-0" key={index}>
     <div className="card-body">
    <img src={item.menu_image} className={category===item.menu_name? "action card-img-top": "card-img-top"}    alt="..."/>
      <h5 className="card-text text-center">{item.menu_name}</h5>
      </div>
    </div> ) })}
   
  </div>
  </div>


    </>
  )
}

export default Menu
