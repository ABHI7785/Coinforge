const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},



});

const cryptouser=mongoose.model("cryptouser",userSchema);
module.exports=cryptouser;