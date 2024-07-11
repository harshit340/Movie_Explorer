//write schema here
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 username:{
    type:String,
    required : true,
    unique:true,
 },
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
    unique:true,
},
confirm_password:{
    type:String,
    required:true,
    unique:true,
}

});

const userModel = mongoose.model("user",userSchema);

export default userModel;