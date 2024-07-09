import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{type:String , required: true},
    email:{ type: String, required: true, unique:true },
    password:{ type: String, required: true},
    cartdata:{type: Object , default:{}}
}, {minimize:false})


const usermodel = mongoose.model('userdata' , userSchema)

export default usermodel;