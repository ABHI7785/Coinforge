const mongoose=require("mongoose");
const Coinschema=mongoose.Schema({
    name:{type:String},
    symbol:{type:String},
    current_price:{type:Number},
    market_cap:{type:Number},
    market_cap_rank:{type:Number},
    price_change_24h:{type:Number},
    total_volume:{type:Number},
    total_supply:{type:Number},
    image:{type:String}




});

const crptocoins=mongoose.model("cryptocoins",Coinschema);
module.exports=crptocoins;