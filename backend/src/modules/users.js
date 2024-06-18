//write schema here
 const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 username:{
    type:String,
    required : true,
    unique:true,
 },
 firstname:{
    type:String, 
    required : true,
    
 },
 lastname:{
    type:String,
    required : true,
    
 },
age :{
    type:Number,
    required:true,
},
password:{
    type:String,
    required:true,
    unique:true,
}

});

const users = mongoose.model("users",userSchema);

module.exports = users;