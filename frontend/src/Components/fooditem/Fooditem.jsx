import  { useContext,} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Storecontext'


function Fooditem({ id , image , description , price , name}) {

    const {itemcart,addTocart, removeitem , url} = useContext(StoreContext)
  return (
    
      <div className="card  border-0">
     <div className="card-body " style={{position: "relative"}} >
    <img src={`${url}/images/` +  image} className='card-img-top'  alt="..."/>
    {!itemcart[id] ?
     <div>
        <img style={{cursor: "pointer",position: "absolute", width: "35px" , bottom: "15px" , right:" 15px" , borderRadius: "50%"}} src={assets.add_icon_white} onClick={()=>addTocart(id)} alt="" />
     </div>
    : <div className='d-flex my-2'style={{position: "absolute", width: "50px" , bottom: "7px" , right:" 60px" , borderRadius: "50%" , cursor: "pointer"}} >
        <img style={{height: "25px"}} src={assets.add_icon_green} onClick={()=>addTocart(id)} alt="" />
        <h5 className='mx-2'>{itemcart[id]}</h5>
        <img style={{height: "25px"}} src={assets. remove_icon_red}  onClick={()=>removeitem(id)} alt="" />
    </div>

    }
      <h5 className="card-text mt-1 ">{name} <img  src={assets.rating_starts } alt="" /></h5>
      <p className='text-muted'>{description}</p>
      <h5 className='text-warning'>${price}</h5>
      </div>
    </div> 
   
  )
}

export default Fooditem
