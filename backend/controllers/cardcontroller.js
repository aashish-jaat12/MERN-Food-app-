import usermodel from '../models/usermodel.js';

/////addtocart///////////

const addtocard = async (req, res) => {
  try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
    
    if (!userdata) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartdata = userdata.cartdata ;
  

    if (!cartdata[req.body.itemid]) {
      cartdata[req.body.itemid] = 1;
    } else {
      cartdata[req.body.itemid] += 1;
    }

    await usermodel.findByIdAndUpdate(req.body.userid, { cartdata });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error occurred" });
  }
};

  //////removetocard/////////

  const removetocard = async (req, res) => {
    try {
      let userdata = await usermodel.findOne({ _id: req.body.userid });
      
      if (!userdata) {
        return res.json({ success: false, message: "User not found" });
      }
  
      let cartdata = userdata.cartdata ;
      
      if (cartdata[req.body.itemid]) {
        if (cartdata[req.body.itemid] > 1) {
          cartdata[req.body.itemid] -= 1;
        } else {
          delete cartdata[req.body.itemid];
        }
  
        await usermodel.findByIdAndUpdate(req.body.userid, { cartdata });
        res.json({ success: true, message: "Removed from Cart" });
      } else {
        res.json({ success: false, message: "Item not found in cart" });
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Error occurred" });
    }
  };
  

//////////cartdata/////////

const fatchcartdata =async (req, res) => {
 try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
      
    if (!userdata) {
      return res.json({ success: false, message: "User not found" });
    }
    let cartdata = await userdata.cartdata
    res.json({success: true , cartdata})

 } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error occurred" });
  
    
 }




}

export {  addtocard , removetocard , fatchcartdata}