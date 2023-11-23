const mongoose=require("mongoose");
const Queryschema=mongoose.Schema({
   name:{type:String},
   email:{type:String},
   message:{type:String},



});

const query=mongoose.model("query",Queryschema);
module.exports=query;