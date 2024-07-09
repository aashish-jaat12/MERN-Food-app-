import foodmodel from "../models/foodmodel.js";
import fs from 'fs'

 const addfood = async (req, res) => {

  let image_filename = `${req.file.filename}`


  const food = new foodmodel({

    name: req.body.name
    , description: req.body.description
    , price: req.body.price,
    category: req.body.category,
    image: image_filename
  })

try {
  await food.save();
   res.json({success:true, message: "Food Added"})
} catch (err) {
  console.log(err)
  res.json({success:false, message: "Error"})
}
}


// all food list

const foodlist =async (req, res)=> {
  
  try {
      const data = await  foodmodel.find({})
      res.json({success:true, data:data})
  } catch (error) { 
     console.log(error)
     res.json({success:false, message: "data not found"})
  } 



}

// remove food item from database


  
const removefood = async (req , res)=>{

  try {
    const food = await foodmodel.findById(req.body.id);

fs.unlink(`uploads/${food.image}`,()=>{} )

await foodmodel.findByIdAndDelete(req.body.id)

res.json({success: true , message: "Food item delete"})

} catch (error) {
  console.log(error)
  res.json({success: false })
}

}
export {addfood , foodlist, removefood}; 