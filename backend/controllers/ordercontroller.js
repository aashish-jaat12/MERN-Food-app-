8
import orderModel from "../models/odermodel.js";
import usermodel from '../models/usermodel.js'
import Stripe from 'stripe'





///////////placing user order

const placeorder = async (req, res) => {

    const stripe = await Stripe(process.env.STRIE_KET)
    const frontend_url = "http://localhost:5173";
    try {
        const neworder = new orderModel({
            userid: req.body.userid,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        await neworder.save();
        await usermodel.findByIdAndUpdate(req.body.userid, { cartdata: {} });

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 * 80
            },
            quantity: item.quantity
        }));

        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charge"
                },
                unit_amount: 2 * 100 * 80
            },
            quantity: 1
        });

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderid=${neworder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderid=${neworder._id}`
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


const verifyorder =async (req , res)=>{
    const {orderid , success} = req.body;
    

    try {
        if(success == "true"){

            await orderModel.findByIdAndUpdate(orderid, {payment: "true"})
            res.json({success:true , message: "pay successfull"})
        }else{
            await orderModel.findByIdAndDelete(orderid)
            res.json({success:false , message: "not paid"})
           
        }
    } catch (error) {
        console.log(error)
        res.json({success:false , message: "error.."})
        
    }}

    const userorder =async (req , res)=>{

try {
    const order = await orderModel.find({userid:req.body.userid})
res.json({success: true, data: order})

} catch (error) {
    res.json({success: false, message: error})
}

    }


    const list = async(req , res)=>{

        try {
            const data = await orderModel.find({})
            res.json({success: true , list: data})
        } catch (error) {
            console.log(error)
            res.json({success: false, message: error})
            
        }
    }

    const updatestatus =async (req , res)=>{
      try {
        await orderModel.findByIdAndUpdate(req.body.orderid, {status: req.body.Status})
        res.json({success: true, message: "updateed successfully"})
      } catch (error) {
        res.json({success: false, message: "error..."})
         
      }
    }

export { placeorder, verifyorder, userorder, list , updatestatus}