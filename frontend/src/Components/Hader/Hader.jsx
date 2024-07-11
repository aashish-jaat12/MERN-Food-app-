import React from 'react'
import './Hader.css'


function Hader() {
 
  return (
  <>
  
  
<div >
      <div id="carouselExampleControls " className=" hader" >
  <div className="carousel-inner ">
  <div className="carousel-caption " style={{zIndex: "1"}}>
  <div className="text-light h "style={{padding: "40px",
            marginTop: "200px"
        }}>
          <h1 className="mt-5 ">Order your favourite food here</h1>
          <h5 className="mb-3">Pizza, Sushi, Burger, Salad, Spaghetti, Tacos, Burrito, Ramen, Steak, Pancakes, Curry, Fried Chicken, Dumplings.</h5>
          <button className="btn px-4 bg-info btn-active mx-1 "  type="submit"> <a className='text-decoration-none text-light' href="#menu">View Menu</a> </button>
        </div>
      </div>
    <div className="carousel-item active imge" >
   
      <img src='hader.png' className="d-block w-100" alt="header........."  style={{
 backgroundSize: "contain",
   position: 'relative',
   backgroundRepeat: "no-repeat",
   width: "100vw",
   
   marginTop: "10px",
padding: "20px",
}} />
    </div>
   
  </div>
 
</div>
</div>


  </>

  )
}

export default Hader
