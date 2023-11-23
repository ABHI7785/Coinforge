const mongoose=require("mongoose");
const AdminSchema=mongoose.Schema({
    Email:{type:String},
    Password:{type:String}



});

const adminn=mongoose.model("adminn",AdminSchema);
module.exports=adminn;