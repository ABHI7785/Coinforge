const mongoose=require("mongoose");
const tradeschema=mongoose.Schema({
   name:{type:String},
   place:{type:String},
   occupation:{type:String},
   age:{type:Number}





});

const trade=mongoose.model("trade",tradeschema);
module.exports=trade;