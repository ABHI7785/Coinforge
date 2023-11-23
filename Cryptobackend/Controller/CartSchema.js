const mongoose=require("mongoose");
const Cartschema=mongoose.Schema({
    name1:{type:String},
    symbol1:{type:String},
    current_price1:{type:Number},
    quantity:{type:Number},
    total:{type:Number},
    mail:{type:String}



});

const cart = mongoose.model("cart",Cartschema);
module.exports=cart;