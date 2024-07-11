import  userModel from  "../modules/userModel.js"
import jwt from "jsonwebtoken";
import validator from "validator";

 const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

export const createNewAccount = async(req,res)=>{
    const {username,email,password,confirm_password} = req.body;

    if(!validator.isEmail(email)){
        console.alert("please enter a valid email")
        return res.json({success:false,message:"Please enter the value email"})
    }

    if(password.length<8){
        console.alert("please enter a valid password of length 8")
        return res.json({success:false , message:"please enter the valid password"})
    }

    if(password !=confirm_password){
        console.alert("password and confirm password are not same");
        return res.json({success:false , message:"Please enter the password and confirm passwrod same"})
    }

    const newUser = new userModel({
        username:username,
        email:email,
        password:password,
        confirm_password:confirm_password,
    })
    const user = await newUser.save();
    const token = createToken(user._id)
    res.json({success:true,token})
    
}
export const loginAccount = async (req, res) => {
    const { email, password } = req.body;

    // Validate email format
    if (!validator.isEmail(email)) {
        console.error("Please enter a valid email");
        return res.status(400).json({ success: false, message: "Please enter a valid email" });
    }

    try {
        // Find user by email and password
        const user = await userModel.findOne({ email, password });

        // Check if user exists
        if (!user) {
            console.error("Invalid email or password");
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        // Successful login
        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        console.error("Error while logging in:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


