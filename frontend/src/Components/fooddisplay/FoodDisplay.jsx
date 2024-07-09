import  { useContext, } from 'react'

import { StoreContext } from '../../Context/Storecontext'

import Fooditem from '../fooditem/Fooditem'

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
   
  return (
    <div className='mx-4'>
        <hr />
           <h2>Top dishes near you</h2>   

           <div className="row row-cols-2 row-cols-md-4 g-4 ">
       {food_list.map((item,index)=>{ {
          {if(category ==="All" || category === item.category){
            return( 
      
                <Fooditem key={index} id={item._id} image={item.image}  description={item.description} price={item.price} name={item.name} />
            )
          }}
       }
    })}
   </div>
    
    </div>
  )
}

export default FoodDisplay
