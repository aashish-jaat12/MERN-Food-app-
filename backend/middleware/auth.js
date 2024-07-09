import jwt from 'jsonwebtoken'

const authmiddleware = (req , res, next)=>{

    const {token} = req.headers;

    if(!token){

      return  res.json({success: false , message: " User not Authorized  plz.. try again"})
    }
    try {
        const tokenid =  jwt.verify(token , process.env.JWT_KEY)
        req.body.userid = tokenid.id
       
        next()
    } catch (error) {
        res.json({success: false , message: "Error......"})
    }


}

export default authmiddleware