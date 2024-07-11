import usermodel from "../models/usermodel.js";
import bcryptjs from  'bcryptjs'
import jwt from 'jsonwebtoken'
import validation from 'validator'



////login//////

const login = async(req, res) => {

    const {  email, password } = req.body;
    if ( !email || !password) {
        return res.json({ success: false, message: 'Please enter all fields' })
    }
        try {
            let user = await usermodel.findOne({ email });
            if (!user) {
                return res.json({success: false, message: 'User not Find' });
            }
            const isMatch = await bcryptjs.compare(password , user.password)
            
            if(!isMatch){
                return res.json({success: false, message: 'Enter valid password' });

            }
              
            const token = creattoken(user._id)
         res.json({success: true , token})
        } catch (error) {
            return res.json({success: false, message: 'Server error' });
        }

}





const creattoken = (id)=>{
    
    return jwt.sign({id},process.env.JWT_KEY)
}




// //////////Registration

const Registration = async (req, res) => {

    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        return res.json({ success: false, message: 'Please enter all fields' });
    }
    if (!validation.isEmail(email)) {
        return res.json({ success: false, message: 'Enter valid email' });
    }
    if (password.length < 8) {
        return res.json({ success: false, message: 'Please enter a strong password' });
    }

    const solt =await bcryptjs.genSalt(10)
  const hashpassword =await bcryptjs.hash(password , solt)
    try {
        // Check for existing user
        let user = await usermodel.findOne({ email });
        if (user) {
            return res.status(400).json({success: false, message: 'User already exists' });
        }

        // Create new user
        user = new usermodel({
            name:name,
            email:email,
            password:hashpassword
        });

        await user.save();
        const token = creattoken(user._id) 
        res.json({success: true, message: 'User registered successfully', token});

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Server error' });
    }
}






export { login, Registration }