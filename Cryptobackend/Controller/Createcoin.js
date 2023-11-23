const bcrypt=require('bcrypt');
const crptocoins = require('./Coinschema1');



const Createcrypto=async(req,res)=>{
    const{name,symbol,current_price,market_cap,market_cap_rank,price_change_24h,total_volume,total_supply,image}=req.body;

    const Usercrypto=await crptocoins.create({name,symbol,current_price,market_cap,market_cap_rank,price_change_24h,total_volume,total_supply,image
      
    })

res.json(Usercrypto)

}
module.exports=Createcrypto