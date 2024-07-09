import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String , required: true},
    description: {type: String , required: true},
    price: {type: String , required: true},
    image: {type: String },
    category: {type: String , required: true}
    
})

const foodmodel = mongoose.model.food || mongoose.model("fooddata" , foodSchema)
 
 export default foodmodel; 