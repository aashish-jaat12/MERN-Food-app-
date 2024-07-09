// import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from "axios"
import { toast } from 'react-toastify'
function Add() {

    const [image, setimage] = useState()
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
   const submitdata= async (e)=>{
e.preventDefault()
const formdata = new FormData()
formdata.append("name" , name)
formdata.append("description" , description)
formdata.append("category" , category)
formdata.append("image" , image)
formdata.append("price" , Number(price))

 const responce = await axios.post('http://localhost:3000/api/food/add', formdata)
if(responce.data.success){
    setname({name:""}),
    setdescription({description:""}),
    setcategory({category:'Salad'}),
    setprice({price:''}),
    setimage(false)
    toast.success(responce.data.message)
}else{
    toast.success(responce.data.message)
}


   }
    return (
        <div className='add'>
            <form className="flex-cols">
                <div className="add-img-upload flex-cols">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="img.." />
                    </label>
                    <input type="file" id='image' onChange={(e) => setimage(e.target.files[0])} hidden required />
                </div>
                <div className='add-product-name flex-cols'>
                    <p>Product name</p>
                    <input type="text" name='name' value={name.name} placeholder='Type here' onChange={(e) => setname(e.target.value)} />
                </div>
                <div className="add-product-description flex-cols">
                    <p>Product Description</p>
                    <textarea name="description" id="description" rows="5" placeholder='Weite.......' value={description.description} onChange={(e) => setdescription(e.target.value)} ></textarea>
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-cols">
                        <p>Product category</p>
                        <select name="category"  value={category.category} onChange={(e) => setcategory(e.target.value)} id=""> ashish
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-colss">
                        <p>Product price</p>
                        <input  value={price.price} onChange={(e) => setprice(e.target.value)} type="number" name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' onClick={submitdata} className='add-btn'>ADD</button>
            </form>

        </div>
    )
}

export default Add
